import InTheBoxItem from '../ui/inTheBoxItem'

export default function InTheBoxZx7() {
	return (
		<div className="pt-6">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				in the box
			</h2>
			<InTheBoxItem number="2x" text="Speaker Unit" />
			<InTheBoxItem number="2x" text="Speaker Cloth Panel" />
			<InTheBoxItem number="1x" text="User Manual" />
			<InTheBoxItem number="1x" text="3.5mm 7.5m Audio Cable" />
			<InTheBoxItem number="1x" text="7.5m Optical Cable" />
		</div>
	)
}
