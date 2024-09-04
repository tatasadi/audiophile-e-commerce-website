import InTheBoxItem from './inTheBoxItem'

export default function InTheBoxContainer({ children }) {
	return (
		<div className="pt-6">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				in the box
			</h2>
			{children}
		</div>
	)
}
