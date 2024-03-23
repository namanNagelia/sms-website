type BoxStats = {
  PTS: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  TO: number;
  "FG%": number;
  "3P%": number;
  "FT%": number;
  PER: number;
};

const averages: BoxStats = {
  PTS: 10, // points per game
  REB: 5, // rebounds per game
  AST: 3, // assists per game
  STL: 1, // steals per game
  BLK: 0.5, // blocks per game
  TO: 2, // turnovers per game
  "FG%": 45, // field goal percentage
  "3P%": 33, // three-point percentage
  "FT%": 70, // free throw percentage
  PER: 15, // player efficiency rating
};

const standardDeviations: BoxStats = {
  PTS: 5,
  REB: 2,
  AST: 1.5,
  STL: 0.5,
  BLK: 0.3,
  TO: 1,
  "FG%": 5,
  "3P%": 10,
  "FT%": 10,
  PER: 5,
};

const weights: BoxStats = {
  PTS: 0.2, // Points are highly valued
  REB: 0.15, // Rebounds show physical presence
  AST: 0.1, // Assists show playmaking ability
  STL: 0.1, // Steals indicate defensive awareness
  BLK: 0.05, // Blocks indicate defensive skill and physical ability
  TO: -0.1, // Turnovers are negative, so this has a negative weight
  "FG%": 0.1, // Shooting efficiency is important
  "3P%": 0.1, // Three-point shooting is increasingly valued
  "FT%": 0.1, // Free throw shooting reflects shooting skill
  PER: 0.2, // Overall efficiency is very important
};

export function calculateOverallPerformanceRating(boxStats: BoxStats): number {
  function zScore(stat: number, mean: number, sd: number): number {
    return (stat - mean) / sd;
  }

  let score = 0;
  for (const key in boxStats) {
    const stat = boxStats[key as keyof BoxStats];
    const avg = averages[key as keyof BoxStats];
    const sd = standardDeviations[key as keyof BoxStats];
    const weight = weights[key as keyof BoxStats];
    const z = zScore(stat, avg, sd);

    score += z * weight;
  }

  const normalizedScore = ((score + 3) / 6) * 100;
  const truncatedScore = Math.floor(normalizedScore * 10) / 10; // Truncate to 1 decimal place
  return Math.max(0, Math.min(100, truncatedScore)); // Ensure the score is between 0 and 100}
}
