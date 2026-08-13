import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { teamMembers } from '@/features/team/data/members'
import { TeamCard } from '@/features/team/components/TeamCard'

export const metadata: Metadata = { title: 'Our Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div style={{ backgroundColor: '#1E1D1D' }} className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-white font-bold" style={{ fontSize: '55px' }}>
          Team 57
        </h1>
        <p
          className="text-zinc-300 mt-3 text-[20px] md:text-[25px]"
        >
          We&apos;re a small team of developers, designers and analysts brought together for our RMIT capstone project. Between us we cover full-stack development, UX design, business analyst, and project management. and we&apos;re focused on building clean, functional software with a genuine emphasis on good process as much as good code
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}