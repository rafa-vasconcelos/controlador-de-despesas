import { currentUser } from "@clerk/nextjs/server";
import Guest from "./components/Guest";
import AdicionarTransacao from "./components/AdicionarTransacao";
import Saldo from "./components/Saldo";
import ReceitasDespesas from "./components/ReceitasDespesas";
import ListaTransacoes from "./components/ListaTransacoes";

const Hero = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="flex flex-col lg:gap-10 items-center p-20">
      <h2 className="lg:text-4xl">Seja bem vindo, {user.firstName}</h2>
      <Saldo />
      <ReceitasDespesas />
      <AdicionarTransacao />
      <ListaTransacoes />
    </main>
  );
};

export default Hero;
