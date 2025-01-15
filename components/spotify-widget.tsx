'use client'

import { useEffect, useState } from 'react'
import { Music } from 'lucide-react'

interface SpotifyData {
  isPlaying: boolean
  title?: string
  artist?: string
  albumArt?: string
}

export function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false })

  useEffect(() => {
    // In a real implementation, this would fetch from your Spotify API endpoint
    const mockData = {
      isPlaying: true,
      title: "Hardwired",
      artist: "Rascals Of The First Order",
      albumArt: "/placeholder.svg?height=64&width=64"
    }
    setData(mockData)
  }, [])

  if (!data.isPlaying) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-lg border">
        <Music className="h-6 w-6 text-muted-foreground" />
        <p className="text-muted-foreground">Not currently playing</p>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border">
      <img
        src={data.albumArt}
        alt={`${data.title} album art`}
        className="w-16 h-16 rounded"
      />
      <div>
        <p className="font-medium">{data.title}</p>
        <p className="text-sm text-muted-foreground">{data.artist}</p>
      </div>
    </div>
  )
}

