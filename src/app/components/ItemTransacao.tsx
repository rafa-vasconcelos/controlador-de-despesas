"use client";

import { toast } from "react-toastify";
import { formatarMoeda } from "../../../lib/utils";
import type { Transacao } from "../types/Transacao";
import deleteTransacao from "@/actions/deleteTransacao";

const Transacao = ({ transacao }: { transacao: Transacao }) => {
  const sinal = transacao.amount < 0 ? "-" : "+";

  const handleDelete = async (id: string) => {
    const confirmado = window.confirm(
      "Tem certeza que deseja deletar essa transação?"
    );

    if (!confirmado) return;
    const { message, error } = await deleteTransacao(id);

    if (error) {
      toast.error(error);
    }
    toast.success(message);
  };

  return (
    <div className="relative group">
      <button
        onClick={() => handleDelete(transacao.id)}
        className="cursor-pointer bg-red-600 border-0 text-white text-lg leading-none 
                   py-1 px-2 absolute top-1/2 transform -translate-x-full -translate-y-1/2 
                   opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-label="Deletar transação"
      >
        &times;
      </button>
      <li
        className={`flex justify-between items-center p-4 mb-3 rounded-sm shadow-md
         bg-white border-r-4 ${
           transacao.amount < 0 ? "border-r-red-500" : "border-r-green-500"
         }`}
      >
        <span className="text-gray-800 font-medium">{transacao.text}</span>
        <span className="text-gray-600">
          {sinal}
          {formatarMoeda(Math.abs(transacao.amount))}
        </span>
      </li>
    </div>
  );
};

export default Transacao;
