import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must containt at least 8 characters" }),
});

export default LoginSchema;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
