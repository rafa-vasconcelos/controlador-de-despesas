import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  //  Verifica se há usuário logado
  if (!user) {
    return null;
  }

  // Verifica se usuário já está na db
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // Se usuário estiver na db, retorne o usuário
  if (loggedInUser) {
    return loggedInUser;
  }

  // Se não estiver na database, criar novo usuário
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
