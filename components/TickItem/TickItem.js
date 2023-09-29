import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const TickItem = ({ children }) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />

      <div className="flex-1 pl-2">{children}</div>
    </div>
  );
};
