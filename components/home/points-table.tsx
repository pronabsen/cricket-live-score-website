import Link from "next/link"
import { BarChart2 } from "lucide-react"
import type { TeamStanding } from "@/types/team"

interface PointsTableProps {
  standings: TeamStanding[]
  seriesName: string
}

export default function PointsTable({ standings, seriesName }: PointsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5" />
          <h2 className="font-bold">Points Table</h2>
        </div>
        <Link href="/series" className="text-blue-600 text-sm">
          View Series
        </Link>
      </div>

      <div className="mb-4">
        <select className="w-full p-2 border rounded-md text-sm">
          <option>{seriesName}</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-1">Team</th>
              <th className="text-center py-2 px-1">M</th>
              <th className="text-center py-2 px-1">W</th>
              <th className="text-center py-2 px-1">L</th>
              <th className="text-center py-2 px-1">NR</th>
              <th className="text-center py-2 px-1">PT</th>
              <th className="text-center py-2 px-1">NRR</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-1 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: team.color }}></div>
                  <span>{team.shortName}</span>
                </td>
                <td className="text-center py-2 px-1">{team.matches}</td>
                <td className="text-center py-2 px-1">{team.won}</td>
                <td className="text-center py-2 px-1">{team.lost}</td>
                <td className="text-center py-2 px-1">{team.noResult}</td>
                <td className="text-center py-2 px-1">{team.points}</td>
                <td className="text-center py-2 px-1">{team.netRunRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

