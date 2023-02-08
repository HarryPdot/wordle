import { clsx } from "clsx";
import "../../App.css";

const Keys = (props) => {
  const { children, id, className, onClick } = props;

  return (
    <div onClick={onClick} id={id} className={clsx(className)}>
      <h1>{children}</h1>
    </div>
  );
};

export { Keys };
