import React, { ReactElement, useEffect, useState } from "react";
import { JsxElement } from "typescript";
import TodoItem from "../TodoItem/TodoItem";

type Props = {};

const TodoBoard = (props: Props): ReactElement => {
  const [itemList, setItemList] = useState(["aaa", "bbb"]);
  // todoItemsView contain JSX code for render Items List
  const [todoItemsView, setTodoItemsView] = useState(<React.Fragment />);

  // Rerender everytime item list change
  useEffect(() => {
    setTodoItemsView(mapItemLstToTodoComponent(itemList));
  }, [itemList]);

  const saveItem = (content: string, id: number = -1): void => {
    var items = itemList;

    if (id === -1) items.push(content);
    // Add new item if id = -1
    else items[id] = content; // Else update content

    setItemList(items);
    setTodoItemsView(mapItemLstToTodoComponent(itemList));
  };

  const deleleItem = (id: number): void => {
    if (id == -1) return;
    var items = itemList;
    items.splice(id, 1);
    setItemList(items);
    setTodoItemsView(mapItemLstToTodoComponent(itemList));
  };

  const mapItemLstToTodoComponent = (lst: string[]): ReactElement => {
    var resultComponentList = lst.map(
      (content: string, id: number): ReactElement => (
        <TodoItem
          id={id}
          content={content}
          isEmpty={false}
          delete={deleleItem}
          save={saveItem}
        />
      )
    );

    return <React.Fragment>{resultComponentList}</React.Fragment>;
  };

  return (
    <React.Fragment>
      {todoItemsView}
      <TodoItem
        id={-1}
        content={""}
        isEmpty={true}
        delete={deleleItem}
        save={saveItem}
      />
    </React.Fragment>
  );
};

export default TodoBoard;
