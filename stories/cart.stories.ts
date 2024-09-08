import Cart from '@/components/ui/cart'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Cart',
	component: Cart,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
