"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../../lib/db";
import { Transacao } from "@/app/types/Transacao";

async function getTransacoes(): Promise<{
  transacoes?: Transacao[];
  error?: string;
}> {
  const { userId } = auth();
  if (!userId) {
    return { error: "Usuário não encontrado" };
  }

  try {
    const transacoes = await db.transaction.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transacoes };
  } catch {
    return { error: "Erro na base de dados" };
  }
}

export default getTransacoes;
