import {
  SignInButton,
  //   SignIn,
  SignedOut,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";
import { checkUser } from "../../../lib/checkUser";

const Header = async () => {
  const user = await checkUser();
  return (
    <nav>
      <div className="flex justify-between px-20 py-3 text-white bg-gray-950">
        <h2 className="font-semibold text-xl">Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;