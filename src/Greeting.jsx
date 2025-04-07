import PropTypes from 'prop-types';

const Greeting = (props) => {
  function handleButtonClick() {
    alert('klikki');
  }

  return (
    <>
      <h2>Moi, {props.name}</h2>
      <p>Miten menee?</p>
      <button onClick={handleButtonClick}>Nappi</button>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
