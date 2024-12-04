"use client";

import adicionarTransacao from "@/actions/adicionarTransacao";
import { useRef } from "react";
import { toast } from "react-toastify";

const AdicionarTransacao = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const acaoCliente = async (formData: FormData) => {
    const { error } = await adicionarTransacao(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Transação adicionada");
      formRef.current?.reset();
    }
  };
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <h3 className="border-b lg:text-xl">Adicionar transação</h3>
      <form ref={formRef} action={acaoCliente} className="gap-3 flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="transacao">Transação</label>
          <input
            type="text"
            id="transacao"
            name="transacao"
            placeholder="Insira texto"
            className="p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="valor">
            Valor <br /> (negativo: despesa, positivo: receita){" "}
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            placeholder="Insira o valor"
            step="0.01"
            className="p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <button className="bg-blue-950 px-10 py-2 text-white">
          Adicionar transação
        </button>
      </form>
    </div>
  );
};

export default AdicionarTransacao;
