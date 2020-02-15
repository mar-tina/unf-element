import {
  UNF,
  html
} from '../../../dist/index.js';
import "./components/test.js";

let props = {
  name: "All props"
};

let newtemplate = html `
  <div>
      <test-list props=""> </test-list>
      <todo-app> </todo-app>
  </div>
`;

const myTemplate = () => newtemplate;

UNF.Core.init("#app", myTemplate());