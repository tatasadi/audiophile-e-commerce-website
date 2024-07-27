import Hero from '@/components/sections/hero'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Hero',
	component: Hero,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
