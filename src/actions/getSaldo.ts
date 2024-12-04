"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../../lib/db";
import { formatarMoeda } from "../../lib/utils";

async function getSaldo(): Promise<{ balance?: string; error?: string }> {
  const { userId } = auth();
  if (!userId) {
    return { error: "Usuário não encontrado" };
  }

  try {
    const transacoes = await db.transaction.findMany({
      where: { userId },
    });

    const saldo = transacoes.reduce(
      (soma, transacao) => soma + transacao.amount,
      0
    );

    const saldoFormatado = formatarMoeda(saldo);

    return { balance: saldoFormatado };
  } catch {
    return { error: "Erro na base de dados" };
  }
}

export default getSaldo;
