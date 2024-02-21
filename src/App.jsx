import { useRef } from "react";
function App() {
  const oref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data={
      name:oref.current.name.value,
      address:oref.current.address.value,
    }
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit} ref={oref}>
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="address" placeholder="address" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
