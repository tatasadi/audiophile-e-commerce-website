export default function ImageItem({ icon, icon2, icon3 }) {
	return (
		<div className="pt-6 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-3">
			<div className="flex flex-col justify-center items-center gap-4">
				<div>{icon}</div>
				<div>{icon2}</div>
			</div>
			<div className="md:col-start-2">{icon3}</div>
		</div>
	)
}
