import { z } from "zod";

const SettingsSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password cannot be the same as the current password",
    path: ["newPassword"], // Highlight the newPassword field
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
    path: ["confirmPassword"], // Highlight the confirmPassword field
  });

export default SettingsSchema;
export type SetingsSchemaType = z.infer<typeof SettingsSchema>;
