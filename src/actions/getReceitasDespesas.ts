"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../../lib/db";

async function getReceitasDespesas(): Promise<{
  receita?: number;
  despesa?: number;
  error?: string;
}> {
  const { userId } = auth();
  if (!userId) {
    return { error: "Usuário não encontrado" };
  }

  try {
    const transacoes = await db.transaction.findMany({
      where: { userId },
    });

    const saldo = transacoes.map((transaction) => transaction.amount);

    const receita = saldo
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);

    const despesa = saldo
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0);

    return { receita, despesa: Math.abs(despesa) };
  } catch {
    return { error: "Erro na base de dados" };
  }
}

export default getReceitasDespesas;
