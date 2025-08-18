
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { UseAppContext } from "../contexts/AppContext";
const SignOutButton = () => {
    const queryClient=useQueryClient()
  const { showToast } = UseAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
        await queryClient.invalidateQueries("validateToken")
      showToast({
        message: "Signed out ",
        type: "SUCCESS",
      });
    },
    onError: () => {
      showToast({
        message: " Error while Sign out ",
        type: "ERROR",
      });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
