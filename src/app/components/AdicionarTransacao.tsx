"use client";

import adicionarTransacao from "@/actions/adicionarTransacao";
import { useRef } from "react";
import { toast } from "react-toastify";

const AdicionarTransacao = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const adicionarDespesa = async () => {
    const formData = new FormData(formRef.current!);
    const valor = formData.get("valor");
    if (valor) {
      // valor negativo
      formData.set("valor", (parseFloat(valor.toString()) * -1).toString());
    }
    const { error } = await adicionarTransacao(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Despesa adicionada");
      formRef.current?.reset();
    }
  };

  const adicionarReceita = async () => {
    const formData = new FormData(formRef.current!);
    const valor = formData.get("valor");
    if (valor) {
      formData.set("valor", parseFloat(valor.toString()).toString());
    }
    const { error } = await adicionarTransacao(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Receita adicionada");
      formRef.current?.reset();
    }
  };

  return (
    <div className="flex flex-col gap-2 font-semibold">
      <h3 className="border-b lg:text-xl">Adicionar transação</h3>
      <form ref={formRef} className="gap-3 flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="transacao">Transação</label>
          <input
            type="text"
            id="transacao"
            name="transacao"
            required
            placeholder="Insira texto"
            className="p-2 border border-gray-300 rounded-sm text-gray-800"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            id="valor"
            name="valor"
            placeholder="Insira o valor"
            step="0.01"
            required
            className="p-2 border border-gray-300 rounded-sm text-gray-800"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            onClick={adicionarDespesa}
            className="bg-red-500 px-10 py-2 text-white"
          >
            Adicionar Despesa
          </button>
          <button
            type="button"
            onClick={adicionarReceita}
            className="bg-green-500 px-10 py-2 text-white"
          >
            Adicionar Receita
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdicionarTransacao;
