import {
  Radar,
  Tooltip,
  RadarChart as _RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text,
} from "recharts";

interface Data {
  label: string;
  value: number;
}

interface Props {
  data: Data[];
  bgColor: string;
  borderColor: string;
}

const CustomTick = (props: any) => {
  const { cx, cy, x, y, angle, radius, payload } = props;

  const xRadiusWithOffset = radius * 1.15; // Adjust the offset as needed
  const yRadiusWithOffset = radius * 1.1; // Adjust the offset as needed

  // Calculate the new x and y positions with increased distance from the center
  const newX = cx + ((x - cx) * xRadiusWithOffset) / radius;
  const newY = cy + ((y - cy) * yRadiusWithOffset) / radius;

  return (
    <Text
      x={newX}
      y={newY}
      textAnchor="middle"
      verticalAnchor="middle"
      fontSize={15}
      height={20}
      width={50}
      fill="white"
    >
      {payload.value}
    </Text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Assuming your data is structured in a way that you can access it

    return (
      <div className="p-2 rounded-md bg-black text-white">
        <p className="text-sm">{data.label}</p>
        <p className="text-sm">Rating: {Math.round(data.value)}</p>
        {/* Add additional data or customize as needed */}
      </div>
    );
  }

  return null;
};

const RadarChart = (props: Props) => {
  const data = props.data.map((item) => ({
    ...item,
    value: Math.min(99, item.value),
  }));

  return (
    <ResponsiveContainer width="80%" height="80%">
      <_RadarChart outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="label"
          tick={<CustomTick />}
          domain={[0, 100]}
        />
        <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
        <Radar
          name="Player"
          dataKey="value"
          stroke={props.borderColor}
          strokeWidth={3}
          fill={props.bgColor}
          fillOpacity={0.6}
          legendType="line"
        />
        <Tooltip content={<CustomTooltip />} />
      </_RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
