import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function ButtonAtom({ children, onClick, color = "blue", className = "", type = "button"}) {
  return (
    <Button color={color} className={className} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}