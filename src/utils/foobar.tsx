import { createContext } from "stencil-context";
import { FunctionalComponent, h } from "@stencil/core";

const { Provider, Consumer } = createContext({});

export const FooBar: FunctionalComponent = () => (
  <Provider value={{ foo: "bar" }}>
    <Consumer>{({ foo }: { foo: string }) => <div>{foo}</div>}</Consumer>
  </Provider>
);
