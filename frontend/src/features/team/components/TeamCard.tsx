import Image from 'next/image'
import type { TeamMember } from '@/types/team'

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col items-center text-center"
      style={{ backgroundColor: '#5A5A5A' }}
    >
      <Image
        src={member.photoUrl}
        alt={member.name}
        width={96}
        height={96}
        className="rounded-full mb-3"
      />
      <h3 className="text-white font-semibold" style={{ fontSize: '25px' }}>
        {member.name}
      </h3>
      <p className="text-zinc-200" style={{ fontSize: '18px' }}>
        {member.role}
      </p>
      <p className="text-zinc-300 mt-2" style={{ fontSize: '18px' }}>
        {member.blurb}
      </p>
    </div>
  )
}