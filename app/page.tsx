import Hero from '../src/components/Hero'
import NavBar from '../src/components/NavBar'
import MessagingPlatforms from '../src/components/MessagingPlatforms'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <MessagingPlatforms />
    </main>
  )
}
