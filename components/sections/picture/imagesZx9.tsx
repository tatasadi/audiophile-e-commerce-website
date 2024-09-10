import ImageItem from '@/components/ui/imageItem'

export default function ImagesZx9() {
	return (
		<div>
			<ImageItem
				icon={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-zx9-speaker/desktop/image-gallery-1.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-zx9-speaker/tablet/image-gallery-1.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-zx9-speaker/mobile/image-gallery-1.jpg"
						/>
						<img
							src="/product-zx9-speaker/mobile/image-gallery-1.jpg"
							alt="Responsive"
							className="w-full h-full object-cover rounded-lg"
						/>
					</picture>
				}
				icon2={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-zx9-speaker/desktop/image-gallery-2.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-zx9-speaker/tablet/image-gallery-2.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-zx9-speaker/mobile/image-gallery-2.jpg"
						/>
						<img
							src="/product-zx9-speaker/mobile/image-gallery-2.jpg"
							alt="Responsive"
							className="w-full h-full object-cover rounded-lg"
						/>
					</picture>
				}
				icon3={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/product-zx9-speaker/desktop/image-gallery-3.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/product-zx9-speaker/tablet/image-gallery-3.jpg"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/product-zx9-speaker/mobile/image-gallery-3.jpg"
						/>
						<img
							src="/product-zx9-speaker/mobile/image-gallery-3.jpg"
							alt="Responsive"
							className="w-full h-full object-cover rounded-lg"
						/>
					</picture>
				}
			/>
		</div>
	)
}
