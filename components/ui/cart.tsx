'use client'
import React, { useState } from 'react'
import { Button } from './button'

export default function Cart() {
	const initialItems = [
		{
			id: 1,
			name: 'XX99 MK II',
			price: 2999,
			quantity: 0,
			image: '/cart/image16.png',
		},
		{
			id: 2,
			name: 'XX99 MK I',
			price: 1750,
			quantity: 0,
			image: '/cart/image12.png',
		},
		{
			id: 3,
			name: 'XX59',
			price: 899,
			quantity: 0,
			image: '/cart/image18.png',
		},
		{
			id: 4,
			name: 'ZX9',
			price: 4500,
			quantity: 0,
			image: '/cart/image13.png',
		},
		{
			id: 5,
			name: 'ZX7',
			price: 3500,
			quantity: 0,
			image: '/cart/image19.png',
		},
		{
			id: 6,
			name: 'YX1',
			price: 599,
			quantity: 0,
			image: '/cart/image14.png',
		},
	]
	const [items, setItems] = useState(initialItems)
	const incrementQuantity = (id: number) => {
		const updatedItems = items.map(item => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity + 1 }
			}
			return item
		})
		setItems(updatedItems)
	}

	const decrementQuantity = (id: number) => {
		const updatedItems = items.map(item => {
			if (item.id === id && item.quantity > 0) {
				return { ...item, quantity: item.quantity - 1 }
			}
			return item
		})
		setItems(updatedItems)
	}
	const removeAll = () => {
		const updatedItems = items.map(item => {
			return { ...item, quantity: 0 }
		})
		setItems(updatedItems)
	}

	const total = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	)
	return (
		<div className="bg-white p-6 rounded-lg max-w-[23.5625rem]">
			<div className="flex justify-between items-center mb-8">
				<h3 className="text-h6 tracking-[0.08038rem]">
					Cart ({items.length})
				</h3>
				<button
					className="remove-all hover:text-burnt-orange text-body-m leading-[1.5625rem]"
					onClick={removeAll}
				>
					Remove all
				</button>
			</div>
			<div className="mb-4">
				{items.map(item => (
					<div
						key={item.id}
						className="flex justify-between items-center mb-4"
					>
						<div className="flex items-center gap-6">
							<div className="w-16 h-16 bg-very-light-gray flex justify-center items-center rounded-lg">
								<img
									src={item.image}
									alt={item.name}
									className="w-10 h-10 rounded-lg"
								/>
							</div>
							<div className="">
								<p className="text-body-m font-bold">{item.name}</p>
								<p className="text-[.875rem] opacity-50">
									${item.price}
								</p>
							</div>
						</div>
						<div className="flex gap-5 justify-center items-center bg-very-light-gray py-1 px-3">
							<button
								className="opacity-25 w-4 hover:text-burnt-orange hover:opacity-95"
								onClick={() => decrementQuantity(item.id)}
							>
								-
							</button>
							<span className="text-[.8125rem] font-bold uppercase">
								{item.quantity}
							</span>
							<button
								className="opacity-25 w-4 hover:text-burnt-orange hover:opacity-95"
								onClick={() => incrementQuantity(item.id)}
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-between my-8">
				<p className="text-body-m opacity-50 uppercase">Total</p>
				<p className="text-h6">${total.toLocaleString()}</p>
			</div>
			<Button className="w-full">Checkout</Button>
		</div>
	)
}
