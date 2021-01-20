import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, Fake World!');
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default HelloWorld;