import React from 'react'
export default function ProductCard({name,price,specs,onAdd}){
return (
<div className="p-4 bg-white rounded-lg shadow">
<h3 className="font-bold">{name}</h3>
<div className="text-teal-600 font-extrabold">₱{price.toLocaleString()}</div>
<div className="text-sm text-gray-500">{specs}</div>
<button onClick={onAdd} className="mt-3 px-3 py-2 bg-teal-500 text-white rounded">Add to cart</button>
</div>
)
}