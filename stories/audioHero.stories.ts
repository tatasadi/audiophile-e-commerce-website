import AudioHero from '@/components/ui/audioHero'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/AudioHero',
	component: AudioHero,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AudioHero>

export default meta
type Story = StoryObj<typeof meta>

export const HEADPHONES: Story = {
	args: {
		title: 'HEADPHONES',
	},
}
export const SPEAKERS: Story = {
	args: {
		title: 'SPEAKERS',
	},
}
export const EARPHONES: Story = {
	args: {
		title: 'EARPHONES',
	},
}
