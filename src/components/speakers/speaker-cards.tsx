"use client"

import Image from "next/image"
import Link from "next/link"
import { LinkedinIcon as LinkedIn, Twitter } from 'lucide-react'
import XIcon from "@mui/icons-material/X";

interface SpeakerCardProps {
  name: string
  image: string
  bio: string
  linkedIn: string
  twitter: string
}

function SpeakerCard({ name, image, bio, linkedIn, twitter }: SpeakerCardProps) {
  return (
    <div id='speakers' className="flex flex-col items-center w-full max-w-[320px] mx-auto">
      <div className="relative rounded-lg border-[3px] border-[#233287] h-[350px] w-full flex overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile picture`}
          width={250}
          height={344}
          className="h-full w-[250px] object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4 p-2 bg-white">
          <Link href={linkedIn} aria-label={`${name}'s LinkedIn profile`}>
            <LinkedIn className="w-8 h-8 text-[#233287]" />
          </Link>
          <Link href={twitter} aria-label={`${name}'s Twitter profile`}>
            <XIcon className="w-8 h-8 text-[#233287]" />
          </Link>
        </div>
      </div>
      <h2 className="text-[#445dae] text-2xl font-bold text-center mt-2">{name}</h2>
      <p className="text-[#b9c2e8] text-center font-bold opacity-80 mt-1">{bio}</p>
    </div>
  )
}

export function SpeakerCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 px-4 py-8">
      <SpeakerCard
        name="Ali Solanki"
        image="/images/ali.png"
        bio="Blockchain developer skilled in building decentralized applications and smart contracts using Solidity on Ethereum and other Web3 platforms."
        linkedIn="https://www.linkedin.com/in/alisolanki/"
        twitter="https://x.com/alisolankii"
      />
      <SpeakerCard
        name="Riti Kumari"
        image="/images/riti.png"
        bio="SDE-III @ Walmart Global Tech | Educator, YouTuber, and Public Speaker sharing insights on tech, growth, and innovation."
        linkedIn="https://www.linkedin.com/in/riti2409/"
        twitter="/"
      />
    </div>
  )
}

