import { useNavigate } from "react-router";
import { getUser } from "../../services/login.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Protect({ children, setAuth }) {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
            try {
                await getUser();
                setAuth(() => true);
            } catch (err) {
                toast.error(
                    "You are not authorized to perform this action. Please login"
                );
                navigate("/login");
            }
        }

        checkAuth();
    }, [navigate]);
    return <>{children}</>;
}

export default Protect;
