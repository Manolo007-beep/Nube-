enum TransactionType {
    DEPOSITO,
    RETIRO 

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

const transactions : Transaction[] = [
    {id: 1, type: TransactionType.DEPOSITO, amount: 1000, date: "2024-06-01"},
    {id: 2, type: TransactionType.RETIRO, amount: 500, date: "2024-06-02"},
    {id: 3, type: TransactionType.DEPOSITO, amount: 2000, date: "2024-06-03"},
    {id: 4, type: TransactionType.RETIRO, amount: 300, date: "2024-06-04"},
    {id: 5, type: TransactionType.DEPOSITO, amount: 1500, date: "2024-06-05"},
    {id: 6, type: TransactionType.RETIRO, amount: 700, date: "2024-06-06"},
    {id: 7, type: TransactionType.DEPOSITO, amount: 2500, date: "2024-06-07"},
    {id: 8, type: TransactionType.RETIRO, amount: 1000, date: "2024-06-08"},
    {id: 9, type: TransactionType.DEPOSITO, amount: 3000, date: "2024-06-09"},
    {id: 10, type: TransactionType.RETIRO, amount: 1200, date: "2024-06-10"}
];

const depositTransactionsAcumulate = transactions
  .filter((transaction) => transaction.type === TransactionType.DEPOSITO)
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
  .filter((transaction) => transaction.type === TransactionType.RETIRO)
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
        transaction.type === TransactionType.DEPOSITO &&
        transaction.date >= new Date("2024-05-05")
      )
        obj.deposit.push({
          amount: transaction.amount,
          date: transaction.date,
        });
      else if (
        transaction.type === TransactionType.RETIRO &&
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


console.log("Total acumulado de depósitos con interés: ", depositTransactionsAcumulate);
console.log("Promedio de retiros con descuento: ", retireTransactionsAvg);
console.log("Objeto con depósitos y retiros filtrados por fecha: ", transactionObj);

