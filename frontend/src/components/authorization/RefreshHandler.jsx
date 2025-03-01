import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshComponent() {
  const [jwtToken, setJwtToken] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setJwtToken(token);
    if (jwtToken) {
      navigate("/app", { replace: false });
    } else {
      navigate("/login");
    }
  }, [location.pathname, navigate, jwtToken]);

  return null;
}

export default RefreshComponent;
