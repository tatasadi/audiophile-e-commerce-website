import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const man = Manrope({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Audiophile-e-commerce-website',
	description: 'A Frontend Mentor challenge',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${man.className} bg-pure-snow`}>
				{children}
			</body>
		</html>
	)
}
