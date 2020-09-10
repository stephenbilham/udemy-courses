import Enzyme from "enzyme";
import Adapter from "Enzyme-adapter-react-16";
import DotEnv from "dotenv";

Enzyme.configure({
  adapter: new Adapter()
});

DotEnv.config({ path: ".env.test" });
