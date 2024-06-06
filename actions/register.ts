"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // server side validitions
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(values);

  if (!validatedFields.success) {
    return { error: "Invalid data" };
  }

  return { success: "Email sent!" };
};
