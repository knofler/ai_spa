import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import MessagingPlatforms from '@/components/MessagingPlatforms';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <MessagingPlatforms />
    </div>
  );
}
