function analyzePasswordStrength(password) {
  // Initialize result object
  const result = {
    strength: "",
    length: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  };

  // Check length
  result.length = password.length >= 8;

  // Check for uppercase, lowercase, number, and special character
  result.hasUppercase = /[A-Z]/.test(password);
  result.hasLowercase = /[a-z]/.test(password);
  result.hasNumber = /[0-9]/.test(password);
  result.hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    password
  );

  // Count how many criteria are met (strength is still an empty string and will be false)
  const criteriaCount = Object.values(result).filter(Boolean).length;

  // Determine strength based on criteria count
  if (criteriaCount <= 2) {
    result.strength = "Weak";
  } else if (criteriaCount === 3) {
    result.strength = "Medium";
  } else if (criteriaCount === 4) {
    result.strength = "Strong";
  } else {
    result.strength = "Very Strong";
  }

  return result;
}

// Test the function
console.log(analyzePasswordStrength("password123"));
console.log(analyzePasswordStrength("StrongP@ss1"));
