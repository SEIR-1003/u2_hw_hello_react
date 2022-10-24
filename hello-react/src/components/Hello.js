// export default function Hello() {
//   const firstName = "Ryan";
//   return <h1>Hello {firstName}</h1>;
// }
export default function Hello(props) {
  return <h1>Hello {props.firstName}</h1>;
}
