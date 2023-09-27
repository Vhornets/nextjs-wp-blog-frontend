import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const TickItem = ({ children }) => {
  return (
    <div className="flex items-center">
      <div>
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>

      <div className="pl-2 flex-1">{children}</div>
    </div>
  );
};
