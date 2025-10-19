// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(bankAccounts) {
  let depositsOverOneHundred = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    if (!bankAccounts[i].deposits) {
      continue;
    }
    for (let t = 0; t < bankAccounts[i].deposits.length; t++) {
      if (bankAccounts[i].deposits[t] > 100) {
        depositsOverOneHundred.push(bankAccounts[i].deposits[t]);
      }
    }
  }
  return depositsOverOneHundred;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
