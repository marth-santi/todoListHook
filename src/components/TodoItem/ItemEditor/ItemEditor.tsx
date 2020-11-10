import React, { ReactElement, useEffect, useState } from "react";

type Props = {
  id: number;
  content: string;
  onChangeEvent?: (content: string, id: number) => void;
};

const ItemEditor = (props: Props): ReactElement => {
  const [content, setContent] = useState(props.content);

  useEffect(() => {
    setContent(props.content);
  });

  const handleContentChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChangeEvent) props.onChangeEvent(e.target.value, props.id);
  };
  return (
    <React.Fragment>
      <div>
        <span>Item number is {props.id == -1 && "being set"} </span>
        <div>
          <b>Content: </b>
          <input type="text" value={content} onChange={handleContentChanged} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemEditor;
