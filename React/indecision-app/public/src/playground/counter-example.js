let count = 0;

const addOne = () => {
  console.log("i was clicked");
  count++;
  renderCountApp(); // new way -- This doesn't rerender the entire page due to react dom algorithms
  // document.querySelector(".change-me").textContent = `Count: ${count}`; // my way
};

const removeOne = () => {
  if (count > 0) {
    count--;
    renderCountApp();
    // document.querySelector(".change-me").textContent = `Count: ${count}`
  }
};

const resetToZero = () => {
  count = 0;
  renderCountApp();
  // document.querySelector(".change-me").textContent = `Count: ${count}`
};

const appRoot = document.getElementById("app");

const renderCountApp = () => {
  const templateTwo = (
    <div>
      <h1 className="change-me">Count: {count}</h1>
      <button onClick={addOne}> add</button>
      <button onClick={removeOne}> remove</button>
      <button onClick={resetToZero}> Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
