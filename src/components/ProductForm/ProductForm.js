import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';

const prepareColorClassName = (color) => {
  return color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
};

const ProductForm = ({
  sizes,
  colors,
  currentSize,
  setCurrentSize,
  currentColor,
  setCurrentColor,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />

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
  );
};

export default ProductForm;
