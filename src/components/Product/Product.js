import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const prepareColorClassName = (color) => {
  return color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
};

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const size = sizes.find((size) => size.name === currentSize);
    return basePrice + (size ? size.additionalPrice : 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log(`Name: ${title}`);
    console.log(`Price: ${getPrice()}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type='button'
                    className={clsx(currentSize === size.name && styles.active)}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type='button'
                    className={clsx(
                      styles[`color${prepareColorClassName(color)}`],
                      currentColor === color && styles.active
                    )}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
