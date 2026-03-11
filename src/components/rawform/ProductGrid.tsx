'use client';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'VELOCITY RUNNER', price: 189, image: '/products/shoe-1.jpg' },
  { id: 2, name: 'APEX TRAINER', price: 159, image: '/products/shoe-2.jpg' },
  { id: 3, name: 'STORM JACKET', price: 249, image: '/products/jacket-1.jpg' },
  { id: 4, name: 'FLEX SHORTS', price: 79, image: '/products/shorts-1.jpg' },
  { id: 5, name: 'POWER TEE', price: 59, image: '/products/tee-1.jpg' },
  { id: 6, name: 'ENDURANCE PACK', price: 129, image: '/products/bag-1.jpg' },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="px-6 md:px-12 py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card group cursor-pointer opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-10"
                />
                <div 
                  className="w-full h-full bg-surface flex items-center justify-center transition-transform duration-500 ease-out-expo group-hover:scale-105"
                >
                  <span className="font-clash text-4xl text-primary/10 uppercase">
                    {product.name.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <h3 className="font-satoshi text-sm font-bold uppercase tracking-wider-brutal product-title-hover">
                  {product.name}
                </h3>
                <span className="font-satoshi text-sm text-muted">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
