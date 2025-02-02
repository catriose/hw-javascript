function checkPasswordComplexity(password) {
    if (password.length < 8) {
      return "Weak";
    }
  
    let hasDigit = false;
    for (let i = 0; i < password.length; i = i + 1) {
      let char = password[i];
      if (char >= '0' && char <= '9') {
        hasDigit = true;
        break; 
      }
    }
    if (!hasDigit) {
      return "Weak";
    }
  
    if (password === password.toLowerCase()) {
      return "Weak";
    }
  
    if (password === password.toUpperCase()) {
      return "Weak";
    }
  
    return "Strong";
  }
  

  