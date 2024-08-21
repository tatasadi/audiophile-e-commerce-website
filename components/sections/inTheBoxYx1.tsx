import InTheBoxItem from '../ui/inTheBoxItem'

export default function InTheBoxYx1() {
	return (
		<div className="pt-6">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				in the box
			</h2>
			<InTheBoxItem number="2x" text="Earphone Unit" />
			<InTheBoxItem number="6x" text="Multi-size Earplugs" />
			<InTheBoxItem number="1x" text="User Manual" />
			<InTheBoxItem number="1x" text="USB-C Charging Cable" />
			<InTheBoxItem number="1x" text="Travel Pouch" />
		</div>
	)
}
