import React, { ReactElement, useEffect, useState } from "react";
import TodoItem, { Props as ItemPropsType } from "../TodoItem/TodoItem";
import TodoBoard from "../TodoBoard/TodoBoard";

type Props = {
  id: number;
  name: string;
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

const TodoGroup = (props: Props): ReactElement => {
  var itemProps: ItemPropsType = { content: props.name, ...props };

  return <TodoItem {...itemProps} />;
};
