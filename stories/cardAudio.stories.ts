import CardAudio from '@/components/ui/cardAudio'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/CardAudio',
	component: CardAudio,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardAudio>

export default meta
type Story = StoryObj<typeof meta>

export const HEADPHONES: Story = {
	args: {
		text: 'XX99 MARK I',
		icon: '/cart/image12.png',
	},
}
export const SPEAKERS: Story = {
	args: {
		text: 'SPEAKERS',
		icon: '/cart/image13.png',
	},
}
export const HEADPHONE: Story = {
	args: {
		text: 'XX99 MARK II',
		icon: '/cart/image16.png',
	},
}
export const XX59: Story = {
	args: {
		text: 'XX59',
		icon: '/cart/image18.png',
	},
}
export const ZX7: Story = {
	args: {
		text: 'ZX7 SPEAKER',
		icon: '/cart/image19.png',
	},
}
