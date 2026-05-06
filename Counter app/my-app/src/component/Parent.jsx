import { MyContext } from "./Context";
import Child from "./Child";

function Parent() {
  const data = "Hello from Parent";

  return (
    <MyContext.Provider value={data}>
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;
