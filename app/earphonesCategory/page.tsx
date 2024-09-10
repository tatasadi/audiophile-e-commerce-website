import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import Earphones from '@/components/sections/earphones'
import AudioHero from '@/components/ui/audioHero'

export default function EarphonesCategory() {
	return (
		<>
			<AudioHero title="EARPHONES" />
			<Earphones />
			<AudioDeviceControl />
		</>
	)
}
