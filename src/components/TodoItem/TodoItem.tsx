import React, { ReactElement, useEffect, useState } from "react";
import ItemEditor from "./ItemEditor/ItemEditor";
import ItemView from "./ItemView/ItemView";

export type Props = {
  id: number;
  content: string;
  isEmpty: boolean;
  isEditing?: boolean;
  delete: (id: number) => void;
  save: (content: string, id?: number) => void;
};

const itemStyle = {
  padding: "5px",
  border: "1px solid",
  margin: "5px",
  maxWidth: "300px",
};

const TodoItem = (props: Props): ReactElement => {
  const [isEditing, setEditingItem] = useState(props.isEditing);
  const [isAdding, setAddingItem] = useState(false);
  const [content, setContent] = useState(props.content);

  const saveItem = () => {
    props.save(content);
    setContent(""); //reset value inside input element of ItemEditor
  };

  // If this is an empty TodoItem => render an Add block
  if (props.isEmpty)
    return (
      <div style={itemStyle}>
        {isAdding && (
          <React.Fragment>
            <ItemEditor id={-1} content={content} onChangeEvent={setContent} />
            <div>
              <button onClick={() => saveItem()}>Save</button>
              <button onClick={() => setAddingItem(false)}>Cancel</button>
            </div>
          </React.Fragment>
        )}
        {!isAdding && (
          <button onClick={() => setAddingItem(true)}>Add New item</button>
        )}
      </div>
    );

  //Editing view for TodoItem
  if (isEditing)
    return (
      <div style={itemStyle}>
        <ItemEditor {...props} onChangeEvent={props.save} />
        <div>
          <button onClick={() => setEditingItem(false)}>Save</button>
          <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
      </div>
    );

  // Default view for TodoItem
  return (
    <div style={itemStyle}>
      <ItemView {...props} />
      <div>
        <button onClick={() => setEditingItem(true)}>Edit</button>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
