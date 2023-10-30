export interface Transaction {
  id: string; // Unique identifier for the transaction
  userId: string; // Reference to the user's ID
  destination:string,
  type: 'income' | 'expense'; // Type of operation (income or expense)
  amount: number; // Amount of money involved in the transaction
  date: string; // Date of the transaction (you can use a Date object or a string)
  hour: string; // Time of the transaction
  status: 'completed' | 'pending' | 'canceled'; // Status of the transaction
}
export interface Expense{
  id:string,
  destination:string,
  amount: number; // Amount of money involved in the transaction
  date: string; // Date of the transaction (you can use a Date object or a string)
  hour: string; // Time of the transaction
}

export interface Income{
  id:string,
  destination:string,
  amount: number; // Amount of money involved in the transaction
  date: string; // Date of the transaction (you can use a Date object or a string)
  hour: string; // Time of the transaction
}
