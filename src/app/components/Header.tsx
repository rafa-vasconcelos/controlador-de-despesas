import {
  SignInButton,
  //   SignIn,
  SignedOut,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";

const Header = async () => {
  return (
    <nav>
      <div className="flex justify-between px-5 lg:px-20 py-3 bg-black">
        <h2 className="font-semibold text-xl">Minhas Despesas</h2>
        <div>
          <SignedOut>
            <SignInButton>Login</SignInButton>
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
