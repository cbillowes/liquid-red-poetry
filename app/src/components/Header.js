import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useSession } from "../firebase/UserProvider";
import { LinkButton, DullLinkButton } from "./Button";

const signOut = async (history) => {
  await logout();
  history.push("/login");
};

const SignedIn = ({ displayName, history }) => (
  <div className="text-white">
    Hello, <strong className="text-yellow-400 font-bold">{displayName}</strong>{" "}
    /{" "}
    <LinkButton
      text="Logout"
      className="text-gray-400"
      onClick={() => signOut(history)}
    />
  </div>
);

const SignedOut = () => (
  <div className="text-white">
    <DullLinkButton to="/login" text="Sign In" />
  </div>
);

const Header = () => {
  const history = useHistory();
  const { user } = useSession();

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-between mb-12 items-center">
      <div className="text-4xl mx-4">
        <span className="text-gray-300 font-sans-serif">liquid</span>
        <span className="bg-red-500 font-serif font-bold m-1 py-1 px-2 text-white rounded-md">Red</span>
      </div>
      {user ? (
        <SignedIn displayName={user.displayName} history={history} />
      ) : (
        <SignedOut />
      )}
    </div>
  );
};

export default Header;
