import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, UserError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter Your New Username (Current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5 ">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-indigo-700"
      >
        Change Your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
