import Speakers from '@/components/sections/speakers'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Speakers',
	component: Speakers,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Speakers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
