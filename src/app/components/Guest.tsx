import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-20">
      <h1 className="lg:text-4xl">Seja Bem-vindo</h1>
      <p className="text-xl">
        Faça o login para registrar sua receitas e despesas
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
