import React, { ReactElement } from "react";

type Props = {
  id: number;
  content: string;
};

const ItemView = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      <div>
        <span>Item number is {props.id} </span>
        <div>
          <b>Content: </b>
          {props.content}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemView;
