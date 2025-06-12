import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(({ id, name, title, colors, sizes, basePrice }) => (
        <Product
          key={id}
          id={id}
          name={name}
          title={title}
          colors={colors}
          sizes={sizes}
          basePrice={basePrice}
        />
      ))}
    </section>
  );
};

export default Products;
