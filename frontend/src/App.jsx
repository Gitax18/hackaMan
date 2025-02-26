import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-2xl">Hello Shad</h1>
      </div>
      <Button>Hello</Button>
    </>
  );
}

export default App;
