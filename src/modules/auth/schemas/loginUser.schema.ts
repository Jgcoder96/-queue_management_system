import z from 'zod';
import { RegexPassword } from '../utils';

export const loginUser = z.object({
  email: z.string().email(),
  password: z.string().regex(RegexPassword),
});

/* La contraseña debe cumplir con los siguientes requisitos:
    - Mínimo de 8 caracteres
    - Máximo de 20 caracteres
    - Al menos una letra minúscula
    - Al menos una letra mayúscula
    - Al menos un dígito
    - Al menos un carácter especial @$!%*?&
*/
