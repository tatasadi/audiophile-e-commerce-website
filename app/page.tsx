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
import InTheBoxX59 from '@/components/sections/inTheBox/inTheBoxX59'
import FeaturesX99II from '@/components/sections/features/featuresX99II'
import ImagesYx1 from '@/components/sections/picture/imagesYx1'
import Cart from '@/components/ui/cart'
import Checkout from '@/components/sections/checkout'
import { Input } from '@/components/ui/input'
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
