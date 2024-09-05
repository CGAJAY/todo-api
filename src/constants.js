import { fileURLToPath } from "url";
import { dirname } from "path";

// required to use __dirname with ES6 modules
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
