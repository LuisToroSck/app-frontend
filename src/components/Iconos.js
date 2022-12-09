import { AiOutlineShoppingCart, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsX,BsTrash } from "react-icons/bs";
// EJEMPLO DE IF
/*function Greeting(){
    const married = false
    return <h1>{married ? 'Married' : 'Single'}</h1>
}*/

// USO DE OBJETOS
/*function Greeting(){
    const user = {
        name: 'Luis',
        apellido: 'Toro'
    }

    return <div>
        <h1>{user.name}</h1>
        <h1>{user.apellido}</h1>
    </div>
}*/

/*export function Greeting(props){
    console.log(props)
    return <h1>{props.title}</h1>
}*/

export function Cart() {
  return (
    <h3>
      <AiOutlineShoppingCart color="white" cursor="pointer" />{" "}
    </h3>
  );
}

export function X() {
  return (
    <h3>
      <BsX color="black" cursor="pointer" style={{display:"inline-block", width: "50px", height:"50px", transform: "all 300ms ease-in-out", margin:"3rem 0 0 2rem"}}/>{" "}
    </h3>
  );
}

export function ArrowUp() {
  return (
    <h3>
      <AiOutlineArrowUp color="black" cursor="pointer" />{" "}
    </h3>
  );
}

export function ArrowDown() {
  return (
    <h3>
      <AiOutlineArrowDown color="black" cursor="pointer" style={{marginTop:"-2rem"}}/>{" "}
    </h3>
  );
}

export function Trash() {
  return (
    <h3>
      <BsTrash color="black" cursor="pointer" style={{marginTop:"3rem"}}/>{" "}
    </h3>
  );
}