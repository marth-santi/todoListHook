import React, { ReactElement } from "react";
import { useParams, RouteComponentProps } from "react-router-dom";

const TodoGroupPage = (props: RouteComponentProps): ReactElement => {
  const { id } = useParams<{ id: string }>();
  return <React.Fragment>Group page {id}</React.Fragment>;
};

export default TodoGroupPage;
