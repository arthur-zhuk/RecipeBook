import React from 'react';

const Steps = (props) => {
  let pColor = 'red';
  let divStyle = {
    color: 'red',
    fontSize: '12px',
    textAlign: 'center',
  }
  if (props.recipe.steps) {
    return (
      <div className='steps-container'>
        <h6>Steps:</h6>
        <p>{props.recipe.steps}</p>
      </div>
    )
  } else {
    return (
      <div className='steps-container'>
        <p style={divStyle}>{props.recipe.author} didn't add steps for this recipe :(</p>
      </div>
    )
  }
}

export default Steps;
