import { useState } from "react";
import { Tab } from "./components/tab/Tab";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
      <div class="header">
        <h1>Ethan's Epic Spring 2023 Vacation</h1>
        <p>Resize the browser window to see the responsive effect</p>
      </div>

      {<Tab />}

      <div id="Tokyo" class="tab-content">
        <div class="column">
          <img src="images/tokyo/1.JPG" />
          <img src="images/tokyo/2.JPG" />
          <img src="images/tokyo/3.jpg" />
          <img src="images/tokyo/4.jpg" />
        </div>

        <div class="column">
          <img src="images/tokyo/5.JPG" />
          <img src="images/tokyo/6.JPG" />
          <img src="images/tokyo/7.jpg" />
          <img src="images/tokyo/8.jpg" />
          <img src="images/tokyo/17.jpg" />
        </div>

        <div class="column">
          <img src="images/tokyo/18.jpg" />
          <img src="images/tokyo/9.JPG" />
          <img src="images/tokyo/10.JPG" />
          <img src="images/tokyo/11.jpg" />
          <img src="images/tokyo/12.jpg" />
        </div>

        <div class="column">
          <img src="images/tokyo/16.JPG" />
          <img src="images/tokyo/13.JPG" />
          <img src="images/tokyo/14.jpg" />
          <img src="images/tokyo/15.jpg" />
        </div>
      </div>
    </>
  );
}

export default App;
