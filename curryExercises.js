import * as R from "ramda";

const mountText = (greeting, name) => `${greeting} ${name}`;
export const saySomething = R.curry(mountText);
