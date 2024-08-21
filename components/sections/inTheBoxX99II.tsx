import InTheBoxItem from '../ui/inTheBoxItem'

export default function InTheBoxX99II() {
	return (
		<div className="pt-6">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				in the box
			</h2>
			<InTheBoxItem number="1x" text="Headphone Unit" />
			<InTheBoxItem number="2x" text="Replacement Earcups" />
			<InTheBoxItem number="1x" text="User Manual" />
			<InTheBoxItem number="1x" text="3.5mm 5m Audio Cable" />
			<InTheBoxItem number="1x" text="Travel Bag" />
		</div>
	)
}
