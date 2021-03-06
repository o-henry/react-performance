import * as React from "react";
import Box from "visual-box";

type Props = Pick<React.ReactPortal, "children">;

const Title = ({ children }: Props) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Box(Title);
