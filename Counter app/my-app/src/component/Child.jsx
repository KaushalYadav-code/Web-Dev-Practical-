import { useContext } from "react";
import { MyContext } from "./Context";

function Child() {
  const data = useContext(MyContext);
  return <h2>{data}</h2>;
}

export default Child;
