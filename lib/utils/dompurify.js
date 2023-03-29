// import { sanitize, isValidAttribute } from 'dompurify'
import purify from "dompurify";

// export { isValidAttribute }
export const isValidAttribute = purify.isValidAttribute;

export default purify.sanitize;
