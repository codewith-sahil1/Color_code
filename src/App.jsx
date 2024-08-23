import React, { useState } from "react"


function App() {

  const [color, setcolor] = useState("olive")
  function fun() {
    setcolor("red")
  }
  function fun2(){
    setcolor("blue")
  }
  function fun3(){
    setcolor("yellow")
  }
  function fun4(){
    setcolor("green")
  }
  return (


    <div style={{
      backgroundColor: color, height: "100vh", width: "100vw", color: "white"
    }}>
      <button onClick={fun} style={{ height: "40px", width: "40px", alignItems: "center", backgroundColor: "red", color: "white" }}>red</button>

      <button onClick={fun2}  style={{height:"50px", width:"50px", backgroundColor:"blue",color:"white"}}>Blue</button>
      <button onClick={fun3} style={{height:"50px", width:"50px",backgroundColor:"yellow",color:"black"}}>yellow</button>
      <button onClick={fun4} style={{height:"50px",width:"50px",backgroundColor:"green",color:"white"}}>green</button>

    </div>


  )
}

export default App
