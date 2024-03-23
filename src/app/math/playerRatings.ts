interface RatingsProps {
  boxStats: any[];
  shotStats: any[];
}

export default function PlayerRatingsCalculator(
  boxStats: any[],
  shotStats: any[]
) {
  function calculateInsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.InsideFGPercent;
    const VF =
      shotStats.InsideFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.InsideFGTendency;
    return 50 + (EF - 45) * 0.6 + (VF - 0.5) * 20 + (TF - 50) * 0.4;
  }

  // Outside Scoring Rating Calculation
  function calculateOutsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.ThreePtFGPercent;
    const VF =
      shotStats.ThreePtFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.ThreePtFGTendency;
    return 50 + (EF - 35) * 1.5 + (VF - 0.3) * 20 + (TF - 10) * 0.6;
  }

  // Playmaking Rating Calculation
  function calculatePlaymakingRating(boxStats: any, shotStats: any) {
    const assistToTO = boxStats.AST / Math.max(1, boxStats.TO);
    return Math.min(100, 50 + assistToTO * 10 + boxStats.AST * 2);
  }

  // Rebounding Rating Calculation
  function calculateReboundingRating(boxStats: any, shotStats: any) {
    return Math.min(100, boxStats.REB * 10);
  }

  // Defense Rating Calculation
  function calculateDefenseRating(boxStats: any, shotStats: any) {
    return Math.min(100, 50 + boxStats.STL * 5 + boxStats.BLK * 7);
  }
  const data = [
    {
      label: "Inside Scoring",
      value: isNaN(calculateInsideScoringRating(boxStats, shotStats))
        ? 0
        : calculateInsideScoringRating(boxStats, shotStats).toFixed(0),
    },
    {
      label: "Outside Scoring",
      value: isNaN(calculateOutsideScoringRating(boxStats, shotStats))
        ? 0
        : calculateOutsideScoringRating(boxStats, shotStats).toFixed(0),
    },
    {
      label: "Playmaking",
      value: isNaN(calculatePlaymakingRating(boxStats, shotStats))
        ? 0
        : calculatePlaymakingRating(boxStats, shotStats).toFixed(0),
    },
    {
      label: "Rebounding",
      value: isNaN(calculateReboundingRating(boxStats, shotStats))
        ? 0
        : calculateReboundingRating(boxStats, shotStats).toFixed(0),
    },
    {
      label: "Defense",
      value: isNaN(calculateDefenseRating(boxStats, shotStats))
        ? 0
        : calculateDefenseRating(boxStats, shotStats).toFixed(0),
    },
  ];
  return data;
}
