import ImageItem from '@/components/ui/imageItem'

export default function ImagesX59() {
	return (
		<div>
			<ImageItem
				icon={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-xx59-headphones/desktop/image-gallery-1.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-xx59-headphones/tablet/image-gallery-1.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-xx59-headphones/mobile/image-gallery-1.jpg"
						/>
						<img
							src="/product-xx59-headphones/mobile/image-gallery-1.jpg"
							alt="Responsive"
							className="rounded-lg"
						/>
					</picture>
				}
				icon2={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-xx59-headphones/desktop/image-gallery-2.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-xx59-headphones/tablet/image-gallery-2.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-xx59-headphones/mobile/image-gallery-2.jpg"
						/>
						<img
							src="/product-xx59-headphones/mobile/image-gallery-2.jpg"
							alt="Responsive"
							className="rounded-lg"
						/>
					</picture>
				}
				icon3={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-xx59-headphones/desktop/image-gallery-3.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-xx59-headphones/tablet/image-gallery-3.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-xx59-headphones/mobile/image-gallery-3.jpg"
						/>
						<img
							src="/product-xx59-headphones/mobile/image-gallery-3.jpg"
							alt="Responsive"
							className="md:min-h-[33rem] lg:min-h-[36rem] rounded-lg"
						/>
					</picture>
				}
			/>
		</div>
	)
}
