import Header from '@/components/sections/header'
import { Button } from '@/components/ui/button'
import Hero from '@/components/sections/hero'
import AudioDeviceControl from '@/components/sections/audioDeviceControl'
export default function Home() {
	return (
		<main className="max-w-[90rem] mx-auto">
			<Header />
			<Hero />
			<AudioDeviceControl />
		</main>
	)
}
