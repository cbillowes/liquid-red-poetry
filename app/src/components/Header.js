import React from "react";
import { useSession } from "../firebase/UserProvider";

const SignedIn = ({ displayName }) => (
  <div className="text-white">
    Hello, <strong className="text-yellow-400 font-bold">{displayName}</strong>
  </div>
);

const SignOut = () => <div>Sign out</div>;

const Header = () => {
  const { user } = useSession();

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-between">
      <div className="text-5xl mb-10 mx-4">
        <span className="text-white font-sans-serif font-thin">liquid</span>
        <span className="text-red-500 font-serif font-bold">Red</span>
      </div>
      {user ? <SignedIn displayName={user.displayName} /> : <SignOut />}
    </div>
  );
};

export default Header;
