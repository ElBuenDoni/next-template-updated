import { z } from "zod";

// EMAIL
// - trim() primero: se normaliza el valor antes de validarlo.
// - min(1) separado del formato: así el usuario ve "obligatorio" si lo deja vacío
//   y "formato inválido" solo si escribió algo incorrecto.
// - pipe(z.email()): valida el formato sobre el valor ya recortado.
//   Esto es lo que debes comprobar con un test (ver nota abajo).
export const emailConstraint = z
  .string()
  .trim()
  .min(1, "El correo es obligatorio")
  .pipe(z.email("Formato de correo inválido"));

// PASSWORD (REGISTRO)
// - Sin trim(): OWASP permite espacios; recortar alteraría la contraseña elegida.
// - min(8) / max(64): límites de creación alineados con NIST/OWASP (ver nota sobre
//   la rev. 4 de NIST, que sube el mínimo a 15 si la contraseña es el único factor).
export const passwordCreationConstraint = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .max(64, "La contraseña no puede exceder los 64 caracteres");

// PASSWORD (LOGIN)
// - Solo "no vacío": la validez real se comprueba contra el hash en el servidor.
//   Validar formato aquí revelaría la política y bloquearía a usuarios con
//   contraseñas creadas bajo una política anterior.
// - max más generoso que el de creación (128 es una elección mía, no un estándar):
//   protege de payloads enormes (DoS al hashear) sin bloquear a usuarios
//   existentes si algún día reduces el máximo de creación.
// - Sin trim(), por la misma razón que en creación.
export const passwordLoginConstraint = z
  .string()
  .min(1, "La contraseña es obligatoria")
  .max(128, "La contraseña no es válida");

// NOMBRE
// - trim() ANTES de min/max: así los espacios sobrantes no cuentan en la longitud
//   y "  ab  " no pasa el min(4).
export const nameConstraint = z
  .string()
  .trim()
  .min(4, "El nombre debe tener al menos 4 caracteres")
  .max(20, "El nombre no puede tener más de 20 caracteres");
