import Header from '@/components/sections/header'
import { Button } from '@/components/ui/button'
import Hero from '@/components/sections/hero'
import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import Product from '@/components/sections/product'
import ItemProduct from '@/components/sections/itemProduct'
import SleekProduct from '@/components/sections/sleekProduct'
import About from '@/components/sections/about'
import Footer from '@/components/sections/footer'
import Headphones from '@/components/sections/headphones'
import Speakers from '@/components/sections/speakers'
import Earphones from '@/components/sections/earphones'
import InTheBoxX99II from '@/components/sections/inTheBoxX99II'
import FeaturesX99II from '@/components/sections/featuresX99II'
export default function Home() {
	return (
		<main className="max-w-[90rem] mx-auto p-6">
			<Header />
			<Hero />
			<AudioDeviceControl />
			<Product />
			<ItemProduct />
			<SleekProduct />
			<About />
			<Footer />
			<Headphones />
			<Speakers />
			<Earphones />
			<InTheBoxX99II />
			<FeaturesX99II />
		</main>
	)
}
