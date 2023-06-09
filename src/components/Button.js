import PropTypes from 'prop-types';

export default function Button({ className, value }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

Button.propTypes = { className: PropTypes.string.isRequired, value: PropTypes.string.isRequired };
