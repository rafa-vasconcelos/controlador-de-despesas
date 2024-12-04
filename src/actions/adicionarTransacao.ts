"use server";
import { auth } from "@clerk/nextjs/server";
// import { db } from '@/lib/db';
import { revalidatePath } from "next/cache";
import { db } from "../../lib/db";

interface DadosTransacao {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: DadosTransacao;
  error?: string;
}

async function adicionarTransacao(
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get("transacao");
  const amountValue = formData.get("valor");

  // Check for input values
  if (!textValue || textValue === "" || !amountValue) {
    return { error: "A transação ou o valor não foram preenchidos" };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

  // Get logged in user
  const { userId } = auth();

  // Check for user
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactionData: DadosTransacao = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath("/");

    return { data: transactionData };
  } catch {
    return { error: "A transação não foi adicionada" };
  }
}

export default adicionarTransacao;
