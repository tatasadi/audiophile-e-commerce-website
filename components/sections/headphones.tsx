import AudioItem from '../ui/audioItem'

export default function Headphones() {
	return (
		<div className="pt-6 space-y-4">
			<AudioItem
				icon="/cart/image16.png"
				title="XX99 Mark II Headphones"
				text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
				isNewProduct={true}
			/>
			<AudioItem
				icon="/cart/image21.png"
				title="XX99 Mark I Headphones"
				text="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
				className="lg:flex-row-reverse"
			/>
			<AudioItem
				icon="/cart/image18.png"
				title="XX59 Headphones"
				text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
			/>
		</div>
	)
}
