import { cn } from "#/lib/utils";
import { CalendarPlus } from "lucide-react";
import { buttonClass } from "./button";

export interface BookAppointmentButtonProps {
  className?: string;
}

export const BookAppointmentButton: React.FC<BookAppointmentButtonProps> = (
  props
) => {
  const { className } = props;
  return (
    <a
      className={buttonClass({
        size: "xl",
        className: cn("inline-flex items-center", className),
      })}
    >
      <span>Book an Appointment</span>
      <CalendarPlus className="ml-2 inline-block h-4 w-4" />
    </a>
  );
};
