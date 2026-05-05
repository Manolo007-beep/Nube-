enum TransactionType {
  DEPOSIT,
  RETIRE,
}

class Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  date: string;

  constructor(id: number, type: TransactionType, amount: number, date: string) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.date = date;
  }
}

const transactions: Transaction[] = [
  { id: 1, type: TransactionType.DEPOSIT, amount: 250.0, date: "2024-05-01" },
  { id: 2, type: TransactionType.RETIRE, amount: 75.5, date: "2024-05-02" },
  { id: 3, type: TransactionType.DEPOSIT, amount: 150.0, date: "2024-05-03" },
  { id: 4, type: TransactionType.RETIRE, amount: 120.0, date: "2024-05-04" },
  { id: 5, type: TransactionType.RETIRE, amount: 50.25, date: "2024-05-05" },
  { id: 6, type: TransactionType.DEPOSIT, amount: 300.0, date: "2024-05-06" },
  { id: 7, type: TransactionType.RETIRE, amount: 200.0, date: "2024-05-07" },
  { id: 8, type: TransactionType.RETIRE, amount: 99.99, date: "2024-05-08" },
];

const depositTransactionsAcumulate = transactions
  .filter((transaction) => transaction.type === TransactionType.DEPOSIT)
  .map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount + (transaction.amount * 1.5) / 100,
      aditional: (transaction.amount * 1.5) / 100,
    };
  })
  .reduce((acum, transaction) => {
    if (transaction.amount >= 100) {
      return acum + transaction.amount;
    }
    return acum;
  }, 0);

const retireTransactionsAvg = transactions
  .filter((transaction) => transaction.type === TransactionType.RETIRE)
  .map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount - (transaction.amount * 0.5) / 100,
      discount: (transaction.amount * 0.5) / 100,
    };
  })
  .filter((retireTransaction) => retireTransaction.discount >= 0.5)
  .reduce((acum, transaction, i, retireTransactions) => {
    return acum + transaction.amount / retireTransactions.length;
  }, 0);

const transactionObj = transactions
  .map((transaction) => {
    return {
      ...transaction,
      date: new Date(transaction.date),
    };
  })
  .reduce(
    (obj: any, transaction) => {
      if (
        transaction.type === TransactionType.DEPOSIT &&
        transaction.date >= new Date("2024-05-05")
      )
        obj.deposit.push({
          amount: transaction.amount,
          date: transaction.date,
        });
      else if (
        transaction.type === TransactionType.RETIRE &&
        transaction.date <= new Date("2024-05-05")
      )
        obj.retire.push({
          amount: transaction.amount,
          date: transaction.date,
        });
      return obj;
    },
    {
      deposit: [],
      retire: [],
    },
  );

console.log("--- Resultados del Taller ---");
console.log(
  "Acumulado de Depósitos (con +1.5%):",
  depositTransactionsAcumulate,
);
console.log(
  "Promedio de Retiros (con descuento y filtro > 0.5):",
  retireTransactionsAvg,
);
console.log(
  "Objeto de Transacciones Filtradas por Fecha:",
  JSON.stringify(transactionObj, null, 2),
);

