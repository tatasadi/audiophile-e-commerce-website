import DeviceControl from '../ui/deviceControl'

export default function AudioDeviceControl() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 mt-48 sm:mt-80 md:mt-60 lg:mt-32 mb-20">
			<DeviceControl
				text="HEADPHONES"
				icon="/cart/image12.png"
				imageClassName="w-[4.99475rem]"
			/>
			<DeviceControl
				text="SPEAKERS"
				icon="/cart/image13.png"
				imageClassName="w-[5.25275rem]"
			/>
			<DeviceControl
				text="EARPHONES"
				icon="/cart/image15.png"
				imageClassName="w-[5.85rem]"
			/>
		</div>
	)
}
