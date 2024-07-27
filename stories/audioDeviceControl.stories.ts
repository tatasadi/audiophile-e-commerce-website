import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/AudioDeviceControl',
	component: AudioDeviceControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AudioDeviceControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
