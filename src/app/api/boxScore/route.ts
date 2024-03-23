import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const gameDetails = await prisma.sms_player_stat_new.findMany();

  //   let playerBoxScore: {
  //     [key: number]: { PTS: number; REB: number; AST: number };
  //   } = {};

  //   gameDetails.forEach((log: any) => {
  //     const playerId = log.player_information_id;
  //     if (!playerBoxScore[playerId]) {
  //       playerBoxScore[playerId] = { PTS: 0, REB: 0, AST: 0 };
  //     }

  //     switch (log.game_stat_stat_count) {
  //       case "OnePointFG":
  //         playerBoxScore[playerId].PTS += 1;
  //         break;
  //       case "TwoPointFG":
  //         playerBoxScore[playerId].PTS += 2;
  //         break;
  //       case "ThreePointFG":
  //         playerBoxScore[playerId].PTS += 3;
  //         break;
  //       case "OffReb":
  //       case "DefReb":
  //         playerBoxScore[playerId].REB += 1;
  //         break;
  //       case "Assist":
  //         playerBoxScore[playerId].AST += 1;
  //         break;
  //     }
  //   });

  //   return NextResponse.json({ playerBoxScore });

  return NextResponse.json({ gameDetails });
}
