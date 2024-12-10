import getTransacoes from "@/actions/getTransacoes";
import { Transacao } from "../types/Transacao";
import ItemTransacao from "./ItemTransacao";

const ListaTransacoes = async () => {
  const { transacoes, error } = await getTransacoes();
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section className="flex flex-col text-left gap-5 w-full lg:w-auto lg:min-w-[250px]">
      <h3 className="border-b text-xl">Histórico</h3>
      <ul>
        {transacoes &&
          transacoes.map((transacao: Transacao) => (
            <ItemTransacao transacao={transacao} key={transacao.id} />
          ))}
      </ul>
    </section>
  );
};

export default ListaTransacoes;
