import DeviceControl from '@/components/ui/deviceControl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/DeviceControl',
	component: DeviceControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DeviceControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
