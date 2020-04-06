<h1>Visible Toggle</h1>;

const app = {
  title: "Visible Toggle",
  details: "here are the details"
};

let visiblity = false;

const toggleVisiblity = () => {
  visiblity = !visiblity;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisiblity}>
        {visiblity ? "hide details" : "show details"}
      </button>
      {visiblity && (
        <div>
          <p>Here are some details you can now see</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
