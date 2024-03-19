import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-row w-full h-full justify-center items-center text-center">
      <div id="Padding" className="h-20"></div>
      <NewsLetter />
      <Games />
      <TopPlayers />
    </div>
  );
}

export function NewsLetter() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Newsletter </div>
      <div className="divider"></div>

      
    </div>
  )
}

export function Games() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Game </div>
      <div className="divider"></div>
      
      
    </div>
  )
}

export function TopPlayers() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Top Players </div>
      <div className="divider"></div>

      
    </div>
  )
}
