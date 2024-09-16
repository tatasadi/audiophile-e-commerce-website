import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import Headphones from '@/components/sections/headphones'
import AudioHero from '@/components/ui/audioHero'

export default function HeadphonesCategory() {
	return (
		<>
			<AudioHero title="HEADPHONES" />
			<Headphones />
			<AudioDeviceControl />
		</>
	)
}
