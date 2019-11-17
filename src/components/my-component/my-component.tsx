import { Component, h } from "@stencil/core";
import { FooBar } from "../../utils/foobar";

@Component({
  tag: "my-component"
})
export class MyComponent {
  render() {
    return (
      <div>
        <FooBar />
      </div>
    );
  }
}
