import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-20">
      <h1 className="text-2xl lg:text-4xl">Seja Bem-vindo</h1>
      <p className="text-sm lg:text-xl">
        Faça o login para registrar suas receitas e despesas
      </p>
      <SignInButton>
        <button className="bg-purple-900 hover:opacity-85 text-white px-10 rounded-sm py-3">
          Login
        </button>
      </SignInButton>
    </div>
  );
};

export default Guest;
