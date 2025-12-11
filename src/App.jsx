import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, firstName: displayName, email: email }));
        navigate("/browse");
        // console.log("login success");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsub;
  }, [dispatch, navigate]);

  return <Outlet />;
}

export default App;
