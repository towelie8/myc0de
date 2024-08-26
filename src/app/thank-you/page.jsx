import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Du hast abonniert!',
  description: 'Danke für das Abonnieren des Newsletters.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Danke fürs Abonnieren des Newsletters!"
      intro="Ich werde dir eine E-Mail senden, jedes Mal wenn ich einen neuen Blogpost veröffentliche, ein neues Projekt freigebe oder etwas Interessantes zu teilen habe, von dem ich denke, dass du davon hören möchtest."
    />
  )
}
