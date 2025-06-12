import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const prepareColorClassName = (color) => {
  return color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
};

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
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
  );
};

export default OptionColor;
