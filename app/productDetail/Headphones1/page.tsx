import FeaturesX99II from '@/components/sections/features/featuresX99II'
import InTheBoxX99II from '@/components/sections/inTheBox/inTheBoxX99II'
import ImagesX99II from '@/components/sections/picture/imagesX99II'
import ProductDetail from '@/components/sections/productDetail'

export default function ProductDetailXX99II() {
	return (
		<>
			<ProductDetail
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-3.png"
						/>
						<img
							src="/pic/product-xx99-mark-two-headphones/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="XX99 Mark II Headphones"
				text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
				price="$ 2,999"
			/>
			<FeaturesX99II />
			<InTheBoxX99II />
			<ImagesX99II />
		</>
	)
}
