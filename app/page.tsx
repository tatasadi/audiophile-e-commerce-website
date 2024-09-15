import Hero from '@/components/sections/hero'
import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import Product from '@/components/sections/product'
import ItemProduct from '@/components/sections/itemProduct'
import SleekProduct from '@/components/sections/sleekProduct'
export default function Home() {
	return (
		<>
			<Hero />
			<AudioDeviceControl />
			<Product />
			<ItemProduct />
			<SleekProduct />
		</>
	)
}
