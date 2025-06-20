import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
