// import React from 'react';

/* const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
      React.createElement("h2", {}, name),
      React.createElement("h3", {}, animal),
      React.createElement("h3", {}, breed),
    ]);
  }; */

    const Pet = (props) => {
      return (
          <div>
             <h2>{props.name}</h2>
             <h3>{props.animal}</h3>
             <h3>{props.breed}</h3>
          </div>
      )
  }
  export default Pet;
