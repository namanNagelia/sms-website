import React from "react";

const defaultReport = `Jamal Dequaviour, a high school basketball standout, has shown exceptional promise through his recent performances. Standing at 6'5" with a wingspan of 6'8", Jamal possesses the physical attributes that make him a versatile threat on both ends of the court. His agility and speed, combined with his size, allow him to guard multiple positions effectively. Offensively, Jamal demonstrates a keen ability to drive to the basket with strength and finesse, drawing defenders and creating opportunities for his teammates. His court vision is advanced for his age, showcasing his potential as a playmaker. Despite his clear talent, areas for improvement include his outside shooting consistency and decision-making under pressure, which, if addressed, could elevate his game significantly.`
const defaultWeakness = [
    {
        weakness: "Bruh"
    },
    {
        weakness: "Bruh1"
    },
    {
        weakness: "Bruh2"
    },
    {
        weakness: "Bruh3"
    },
]

interface ScoutProps {
    report: string
    strengths: string[]
    weaknesses: string[]

}

const ScoutingReport: React.FC<ScoutProps> = ({ report, strengths, weaknesses }) => {
    const AttributeCard = ({ name, list }: { name: string, list: string[] }) => {
        return (
            <div className="bg-buttonBlue h-[500px] w-2/5 rounded-3xl flex flex-col py-4 items-center">
                <text>{name}</text>
                <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
                <div className="w-full flex-col flex justify-start text-start px-4 space-y-2">
                    {
                        list.map((item, index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="video-card w-3/5 flex flex-col items-center space-y-2 py-8">
            <div className="title">
                Report
            </div>
            <div className="h-1 bg-brandGrey w-1/4 rounded-md" />
            <div className="text-brandGrey font-dinCondensed">
                By: Miguel Ventura
            </div>
            <text
                className="text-brandWhite text-2xl px-8 text-start space-y-2"
                style={{
                    lineHeight: "1.8",
                    wordSpacing: "4px",
                }}
            >
                {defaultReport}
            </text>

            <div className="flex flex-row w-full px-24 justify-between pt-4 font-dinCondensed text-brandWhite text-4xl">
                <AttributeCard name={"Strengths"} list={strengths} />
                <AttributeCard name={"Weaknesses"} list={weaknesses} />
            </div>
        </div>
    )
}

export default ScoutingReport