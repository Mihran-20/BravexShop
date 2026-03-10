import ProductCard from "../productcard/ProductCard.jsx";
import { useEffect, useState } from "react";

const Bags = () => {
    const [productsBags, setProductsBags] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:3001/productsBags');
                const data = await res.json();

                setProductsBags(data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setProductsBags([]);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-r from-[#1a1a1a] via-[#131313] to-[#FFC26F] px-4 pb-12 pt-24">
            <header className="relative mb-12 select-none text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-[#FFC26F] drop-shadow-[0_0_4px_#FFC26F] sm:drop-shadow-[0_0_6px_#FFC26F] md:drop-shadow-[0_0_8px_#FFC26F] relative">
                    Bags
                </h1>
                <div
                    className="absolute inset-x-0 -bottom-1 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#FFC26F] to-transparent"
                />
            </header>

            <div className="mx-auto grid max-w-7xl gap-8 px-2 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
                {productsBags.map((p, i) => (
                    <div key={i} className="rounded-xl ring-1 ring-white/5 hover:ring-[#FFC26F]/30 transition-all duration-300">
                        <ProductCard {...p} hideSizes={true} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Bags;
