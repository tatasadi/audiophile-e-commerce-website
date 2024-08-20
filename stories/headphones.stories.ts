import Headphones from '@/components/sections/headphones'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Headphones',
	component: Headphones,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Headphones>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
