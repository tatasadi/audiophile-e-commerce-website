import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import Speakers from '@/components/sections/speakers'
import AudioHero from '@/components/ui/audioHero'

export default function SpeakerCategory() {
	return (
		<>
			<AudioHero title="SPEAKERS" />
			<Speakers />
			<AudioDeviceControl />
		</>
	)
}
