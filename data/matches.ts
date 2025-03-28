import type { Match } from "@/types/match"

export const liveMatches: Match[] = [
  {
    id: "ipl-2025-8",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 8,
    venue: "Chennai",
    team1: {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      color: "#D1171C",
      score: "196/7 (20.0)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1105",
    },
    team2: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      color: "#F9CD05",
      score: "Yet to bat",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1108",
    },
    status: "live",
    statusText: "Innings Break - CSK opted to field",
    predictions: {
      team1: 77,
      team2: 22,
      tie: 1,
    },
  },
  {
    id: "ipl-2025-9",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 9,
    venue: "Ahmedabad",
    team1: {
      name: "Gujarat Titans",
      shortName: "GT",
      color: "#1C9AD6",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1108",
    },
    team2: {
      name: "Mumbai Indians",
      shortName: "MI",
      color: "#004BA0",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1108",
    },
    status: "upcoming",
    statusText: "21 hrs 39 mins to toss",
    predictions: {
      team1: 46,
      team2: 54,
    },
  },
  {
    id: "ipl-2025-7",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 7,
    venue: "Hyderabad",
    team1: {
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      color: "#F26522",
      score: "190/9 (20.0)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1105",
    },
    team2: {
      name: "Lucknow Super Giants",
      shortName: "LSG",
      color: "#A72056",
      score: "193/5 (19.1)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1104",
    },
    status: "completed",
    statusText: "Lucknow Super Giants beat Sunrisers Hyderabad by 5 wickets",
    playerOfMatch: {
      name: "Shardul Thakur",
      team: "LSG",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: "ipl-2025-6",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 6,
    venue: "Delhi",
    team1: {
      name: "Delhi Capitals",
      shortName: "DC",
      color: "#0078BC",
      score: "187/6 (20.0)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1106",
    },
    team2: {
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      color: "#3A225D",
      score: "183/9 (20.0)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1104",
    },
    status: "completed",
    statusText: "Delhi Capitals won by 4 runs",
    playerOfMatch: {
      name: "Rishabh Pant",
      team: "DC",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: "ipl-2025-5",
    seriesName: "Indian Premier League, 2025",
    matchNumber: 5,
    venue: "Jaipur",
    team1: {
      name: "Rajasthan Royals",
      shortName: "RR",
      color: "#EA1A85",
      score: "178/8 (20.0)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1103",
    },
    team2: {
      name: "Punjab Kings",
      shortName: "PBKS",
      color: "#DD1F2D",
      score: "182/4 (19.2)",
      logo: "https://static-image.sportsapi360.com/cricket/logo/team/1109",
    },
    status: "completed",
    statusText: "Punjab Kings won by 6 wickets",
    playerOfMatch: {
      name: "Sam Curran",
      team: "PBKS",
      image: "/placeholder.svg?height=50&width=50",
    },
  },
]

