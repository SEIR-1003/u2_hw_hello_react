const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.userName}</h1>
      <h2>Hello {props.names[0]}</h2>
      <h2>Hello {props.names[1]}</h2>
      <h2>Hello {props.names[2]}</h2>
      <h2>Hello {props.names[3]}</h2>
      <h2>Hello {props.names[4]}</h2>
      <h2>Hello {props.names[5]}</h2>
    </div>
  );
};

export default Hello;
