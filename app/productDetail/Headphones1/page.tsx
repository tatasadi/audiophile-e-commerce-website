import FeaturesX99II from '@/components/sections/features/featuresX99II'
import InTheBoxX99II from '@/components/sections/inTheBox/inTheBoxX99II'
import ImagesX99II from '@/components/sections/picture/imagesX99II'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailXX99II() {
	return (
		<div className="p-12">
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
			<div className="lg:flex">
				<FeaturesX99II />
				<InTheBoxX99II />
			</div>
			<ImagesX99II />
			<div className="grid grid-cols-1 md:grid-cols-3 py-8 mx-2 lg:mx-[5rem]">
				<ProductControl
					text="XX99 MARK I"
					icon="/cart/image12.png"
					imageClassName="w-[4.99475rem]"
				/>
				<ProductControl
					text="XX99 MARK I"
					icon="/cart/image12.png"
					imageClassName="w-[4.99475rem]"
				/>
				<ProductControl
					text="XX99 MARK I"
					icon="/cart/image12.png"
					imageClassName="w-[4.99475rem]"
				/>
			</div>
		</div>
	)
}
