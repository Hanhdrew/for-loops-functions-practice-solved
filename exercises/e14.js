// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(bankAccounts) {
  let clientsWithWrongBalance = [];
  for (let i = 0; i < bankAccounts.length; i++) {
    let actualBalance = 0;
    if (!bankAccounts[i].deposits || !bankAccounts[i].withdrawals) {
      continue;
    }
    let depositSum = 0;
    for (let j = 0; j < bankAccounts[i].deposits.length; j++) {
      depositSum = depositSum + bankAccounts[i].deposits[j];
    }
    let withdrawalSum = 0;
    for (let k = 0; k < bankAccounts[i].withdrawals.length; k++) {
      withdrawalSum = withdrawalSum + bankAccounts[i].withdrawals[k];
    }
    actualBalance = actualBalance + depositSum - withdrawalSum;
    if (bankAccounts[i].balance !== actualBalance) {
      clientsWithWrongBalance.push(bankAccounts[i]);
    }
  }
  return clientsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
