import About from '@/components/sections/about'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/About',
	component: About,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
