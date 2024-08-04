import SleekProduct from '@/components/sections/sleekProduct'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/SleekProduct',
	component: SleekProduct,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SleekProduct>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
