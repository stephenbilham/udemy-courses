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
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title.toUpperCase()}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
      <li>item three</li>
    </ol>
  </div>
);

const user = {
  name: "Stephen",
  age: "26",
  location: "Malibu"
};

const getLocation = location => {
  if (location) {
    return <p>location: {location}</p>;
  } else {
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p> Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

//not a big fan of {user.age && user.age >= 18 && <p> Age: {user.age}</p>} This could be coded better as a ternary or a function; the && operator is to value if two conditons are true then return something but it is used in a way to return something <p> this contradicts why i use them.
