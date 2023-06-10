import type { FC } from "react";
import type { Todo } from "@/types";

type Props = {
  data: Todo;
};

export const UserTodo: FC<Props> = ({ data }) => {
  const { id, title } = data;

  return (
    <div className="pl-4">
      <div>{data != null ? `${id}: ${title}` : ""}</div>
    </div>
  );
};
