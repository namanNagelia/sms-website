export default function PlayerRatingsCalculator(
  boxStats: any[],
  shotStats: any[]
) {
  const avgInsideFGPercent = 50; // Average Inside Field Goal Percentage for high schoolers
  const avgThreePtFGPercent = 33; // Average Three-Point Field Goal Percentage for high schoolers

  function calculateInsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.InsideFGPercent;
    const VF =
      shotStats.InsideFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.InsideFGTendency;

    // Calculate the adjusted efficiency factor based on performance relative to the average
    let adjustedEF =
      EF < avgInsideFGPercent
        ? (EF - avgInsideFGPercent) * 1.2 // Apply a larger penalty for below-average efficiency
        : (EF - avgInsideFGPercent) * 0.6; // Apply a standard reward for above-average efficiency

    return Math.max(0, 50 + adjustedEF + (VF - 0.5) * 20 + (TF - 50) * 0.4); // Ensure rating does not go below 0
  }

  function calculateOutsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.ThreePtFGPercent;
    const VF =
      shotStats.ThreePtFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.ThreePtFGTendency;

    // Calculate the adjusted efficiency factor based on performance relative to the average
    let adjustedEF =
      EF < avgThreePtFGPercent
        ? (EF - avgThreePtFGPercent) * 7.0 // Apply a larger penalty for below-average efficiency
        : (EF - avgThreePtFGPercent) * 1.5; // Apply a standard reward for above-average efficiency

    return Math.max(0, 50 + adjustedEF + (VF - 0.3) * 20 + (TF - 10) * 0.6); // Ensure rating does not go below 0
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

export function PlayerRatingsCalculatorV2(boxStats: any[], shotStats: any[]) {
  const avgInsideFGPercent = 50; // Average Inside Field Goal Percentage for high schoolers
  const avgThreePtFGPercent = 33; // Average Three-Point Field Goal Percentage for high schoolers

  function calculateInsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.InsideFGPercent;
    const VF =
      shotStats.InsideFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.InsideFGTendency;

    // Calculate the adjusted efficiency factor based on performance relative to the average
    let adjustedEF =
      EF < avgInsideFGPercent
        ? (EF - avgInsideFGPercent) * 1.2 // Apply a larger penalty for below-average efficiency
        : (EF - avgInsideFGPercent) * 0.6; // Apply a standard reward for above-average efficiency

    return Math.max(0, 50 + adjustedEF + (VF - 0.5) * 20 + (TF - 50) * 0.4); // Ensure rating does not go below 0
  }

  function calculateOutsideScoringRating(boxStats: any, shotStats: any) {
    const EF = shotStats.ThreePtFGPercent;
    const VF =
      shotStats.ThreePtFGA / (shotStats.InsideFGA + shotStats.ThreePtFGA);
    const TF = shotStats.ThreePtFGTendency;

    // Calculate the adjusted efficiency factor based on performance relative to the average
    let adjustedEF =
      EF < avgThreePtFGPercent
        ? (EF - avgThreePtFGPercent) * 7.0 // Apply a larger penalty for below-average efficiency
        : (EF - avgThreePtFGPercent) * 1.5; // Apply a standard reward for above-average efficiency

    return Math.max(0, 50 + adjustedEF + (VF - 0.3) * 20 + (TF - 10) * 0.6); // Ensure rating does not go below 0
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
  const data = {
    InsideScoring: isNaN(calculateInsideScoringRating(boxStats, shotStats))
      ? 0
      : Math.min(
          99,
          Number(calculateInsideScoringRating(boxStats, shotStats).toFixed(0))
        ),
    OutsideScoring: isNaN(calculateOutsideScoringRating(boxStats, shotStats))
      ? 0
      : Math.min(
          99,
          Number(calculateOutsideScoringRating(boxStats, shotStats).toFixed(0))
        ),
    Playmaking: isNaN(calculatePlaymakingRating(boxStats, shotStats))
      ? 0
      : Math.min(
          99,
          Number(calculatePlaymakingRating(boxStats, shotStats).toFixed(0))
        ),
    Rebounding: isNaN(calculateReboundingRating(boxStats, shotStats))
      ? 0
      : Math.min(
          99,
          Number(calculateReboundingRating(boxStats, shotStats).toFixed(0))
        ),
    Defense: isNaN(calculateDefenseRating(boxStats, shotStats))
      ? 0
      : Math.min(
          99,
          Number(calculateDefenseRating(boxStats, shotStats).toFixed(0))
        ),
  };
  return data;
}
