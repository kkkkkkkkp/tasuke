export interface PasswordOptions {
    capital?: boolean;
    special?: boolean;
    minLength?: number;
  }
  
export function validatePassword(password: string, options: PasswordOptions): string {
    let regexParts = '^';
    let errorMessage = '';
  
    if (options.capital) {
      regexParts += '(?=.*[A-Z])'; // At least one uppercase letter
      errorMessage += 'one uppercase letter, ';
    }
  
    if (options.special) {
       // At least one special character
      regexParts += '(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\'"\\\\|,.<>\\/?]+)';
      errorMessage += 'one special character, ';
    }
  
    // Add minimum length constraint
    if (options.minLength) {
      regexParts += `.{${options.minLength},}`;
      errorMessage += `minimum length of ${options.minLength}, `;
    } else {
      regexParts += '.+';
    }
  
    regexParts += '$';
    const regex = new RegExp(regexParts);
  
    if (regex.test(password)) {
      return 'Password is valid.';
    } else {
      // Remove last comma and space
      errorMessage = errorMessage.slice(0, -2);
      return `Password must contain at least ${errorMessage}.`;
    }
}