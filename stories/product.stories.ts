import Product from '@/components/sections/product'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Product',
	component: Product,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
