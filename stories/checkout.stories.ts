import Checkout from '@/components/sections/checkout'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Checkout',
	component: Checkout,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Checkout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
