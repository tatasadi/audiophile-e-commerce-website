import DeviceControl from '@/components/ui/deviceControl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/DeviceControl',
	component: DeviceControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DeviceControl>

export default meta
type Story = StoryObj<typeof meta>

export const HEADPHONES: Story = {
	args: {
		text: 'HEADPHONES',
		icon: '/cart/image12.png',
	},
}
export const SPEAKERS: Story = {
	args: {
		text: 'SPEAKERS',
		icon: '/cart/image13.png',
	},
}
export const EARPHONES: Story = {
	args: {
		text: 'EARPHONES',
		icon: '/cart/image14.png',
	},
}
