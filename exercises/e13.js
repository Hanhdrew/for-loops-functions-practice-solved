// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) {
  let allAccountsWithSumsOfDepositsLess2000 = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    if (!bankAccounts[i].deposits || bankAccounts[i].deposits.length === 0) {
      allAccountsWithSumsOfDepositsLess2000.push(bankAccounts[i]);
      continue;
    }
    let sum = 0;
    for (let t = 0; t < bankAccounts[i].deposits.length; t++) {
      sum = sum + bankAccounts[i].deposits[t];
    }
    if (sum < 2000 && sum > 0) {
      allAccountsWithSumsOfDepositsLess2000.push(bankAccounts[i]);
    }
  }
  return allAccountsWithSumsOfDepositsLess2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
