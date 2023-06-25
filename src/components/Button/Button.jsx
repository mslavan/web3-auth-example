import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Button({
  label, variant, className, ...rest
}) {
  const buttonStyle = cn('btn', {
    'btn-secondary': variant === 'secondary',
    'btn-primary': variant !== 'secondary',
  }, className);

  return <button type="button" className={buttonStyle} {...rest}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
Button.defaultProps = {
  className: '',
  variant: 'primary',
};

export default Button;
