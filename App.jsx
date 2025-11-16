import React, {useState} from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import './index.css'


const builds = [
{id:1,name:'Gaming X1',price:28999,category:'gaming',specs:'Ryzen 5 5600X • RTX 3060 • 16GB • 1TB SSD'},
{id:2,name:'Creator Pro',price:45999,category:'creator',specs:'Ryzen 7 7700X • RTX 4070 • 32GB • 2TB SSD'},
]


export default function App(){
const [cart,setCart] = useState([])
const add = (p)=>{ setCart(prev=>{ const ex = prev.find(i=>i.id===p.id); if(ex) return prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i); return [...prev,{...p,qty:1}]; }) }
return (
<div className="min-h-screen bg-slate-50">
<Header />
<main className="container mx-auto p-4">
<h1 className="text-3xl font-bold">Builds</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
{builds.map(b=> <ProductCard key={b.id} {...b} onAdd={()=>add(b)} />)}
</div>
</main>
</div>
)
}