import DeviceControl from '../ui/deviceControl'

export default function AudioDeviceControl() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center mt-60 sm:mt-96 md:mt-60 lg:mt-32 gap-12 md:gap-3">
			<DeviceControl text="HEADPHONES" icon="/cart/image12.png" />
			<DeviceControl text="SPEAKERS" icon="/cart/image13.png" />
			<DeviceControl text="EARPHONES" icon="/cart/image14.png" />
		</div>
	)
}
