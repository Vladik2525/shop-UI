import { z } from "zod";

const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'image/gif'];

export const ProductSchema = z.object({
    title: z.string().max(15).min(1),
    description: z.string().min(20).max(40),
    file: z
        .instanceof(File)
        .optional()
        .refine((file) => {
            if (!file) return false;
            return ACCEPTED_FILE_TYPES.includes(file.type);
        }, 'Invalid type of image'),

    price: z.string().min(1)
})
