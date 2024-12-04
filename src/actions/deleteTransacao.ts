"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../../lib/db";
import { revalidatePath } from "next/cache";

async function deleteTransacao(id: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = auth();
  if (!userId) {
    return { error: "Usuário não encontrado" };
  }

  try {
    await db.transaction.delete({
      where: {
        id: id,
        userId,
      },
    });

    revalidatePath("/");
    return { message: "Transação deletada" };
  } catch {
    return { error: "Erro na base de dados" };
  }
}

export default deleteTransacao;
