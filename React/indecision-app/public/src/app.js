//JSX -Javascript XML

//if statements
//ternary
//logical and operators
//only render the subtitle (and p tag) if subtitle exists - logical and operator
//render new p tag - if options > 0 "here are you options " - turnary
//

const app = {
  title: "indecision app",
  subtitle: "put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeOptions = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  if (option) {
    alert(option);
  }
};

const appRoot = document.getElementById("app");
const render = () => {
  const template = (
    <div>
      <h1>{app.title.toUpperCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeOptions}>Remove all</button>

      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
