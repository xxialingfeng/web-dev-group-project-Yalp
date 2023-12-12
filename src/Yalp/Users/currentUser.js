import * as client from "./userClient";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
function CurrentUser({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const fetchCurrentUser = async () => {
    try {
      if (currentUser === null) {
        // If currentUser is null, skip the request and set loading to false
        setLoading(false);
        return;
      }

      const user = await client.account();
      dispatch(setCurrentUser(user));
      setLoading(false);
    } catch (error) {
      // Handle error, e.g., log it or set an error state
      console.error('Error fetching current user:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [currentUser]); // Re-run the effect when currentUser changes

  return <>{!loading && children}</>;
}

export default CurrentUser;