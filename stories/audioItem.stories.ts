import AudioItem from '@/components/ui/audioItem'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/AudioItem',
	component: AudioItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AudioItem>

export default meta
type Story = StoryObj<typeof meta>

export const HEADPHONES: Story = {
	args: {
		title: 'XX99 Mark II Headphones',
		text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
		icon: '/cart/image16.png',
	},
}
export const HEADPHONE: Story = {
	args: {
		title: 'XX99 Mark I Headphones',
		text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
		icon: '/cart/image12.png',
	},
}
export const XX59: Story = {
	args: {
		title: 'XX59 Headphones',
		text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
		icon: '/cart/image18.png',
	},
}
export const ZX9: Story = {
	args: {
		title: 'ZX9 SPEAKER',
		text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
		icon: '/cart/image13.png',
	},
}
export const ZX7: Story = {
	args: {
		title: 'ZX7 SPEAKER',
		text: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
		icon: '/cart/image19.png',
	},
}
export const EARPHONES: Story = {
	args: {
		title: 'YX1 WIRELESS EARPHONES',
		text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
		icon: '/cart/image19.png',
	},
}
