import ItemProduct from '@/components/sections/itemProduct'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/ItemProduct',
	component: ItemProduct,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ItemProduct>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
