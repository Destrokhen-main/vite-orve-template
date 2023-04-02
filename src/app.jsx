import "./style.scss";
import HelloWorld from "./component/helloword";

const App = () => {
  return (
    <div class="app block" style={{ fontSize: "10px" }}>
      <HelloWorld /> 
    </div>
  )
}

export default App;