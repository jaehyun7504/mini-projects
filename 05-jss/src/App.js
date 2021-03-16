import React, { useState } from 'react';
import useStyles from './styles/useStyles';

const App = props => {
  const [color, setColor] = useState('#2c3e50');
  const changeColor = () => setColor('#0984e3');
  const [number, setNumber] = useState(1.6);
  const changeNumber = () => setNumber(3.2);
  const handleChange = () => {
    changeColor();
    changeNumber();
  };
  const classes = useStyles({ color, number });
  return (
    <div className={classes.App}>
      <h1 onClick={handleChange}>Hello, World!</h1>
    </div>
  );
};

export default App;
