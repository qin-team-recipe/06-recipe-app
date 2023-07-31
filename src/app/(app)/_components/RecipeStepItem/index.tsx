type RecipeStepItemProps = {
  index: number;
  text: string;
};

export const RecipeStepItem = ({ index, text }: RecipeStepItemProps) => {
  return (
    <div className="flex flex-row items-start gap-x-2  px-4 py-2">
      <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-tomato-9 text-xs font-light text-mauve-1">
        {index}
      </div>
      <div className="flex-1 leading-normal text-mauve-12">{text}</div>
    </div>
  );
};
