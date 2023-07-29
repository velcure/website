import { CalendarPlus } from "lucide-react";
import { buttonClass } from "./button";

export const BookAppointmentButton: React.FC = () => (
  <a
    className={buttonClass({
      size: "xl",
      className: "inline-flex items-center",
    })}
  >
    <span>Book an Appointment</span>
    <CalendarPlus className="ml-2 inline-block h-4 w-4" />
  </a>
);
