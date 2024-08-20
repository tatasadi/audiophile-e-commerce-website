import Earphones from '@/components/sections/earphones'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Earphones',
	component: Earphones,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Earphones>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
