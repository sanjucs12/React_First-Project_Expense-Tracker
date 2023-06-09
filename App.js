import React, {useState} from "react";

//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Petrol",
    date: new Date(2023, 3, 25),
    place: "Bengaluru",
    price: 250,
  },
  {
    id: "e2",
    title: "Vegetables",
    date: new Date(2023, 3, 26),
    place: "Bengaluru",
    price: 200,
  },
  {
    id: "e3",
    title: "Food orders",
    date: new Date(2023, 3, 25),
    place: "Bengaluru",
    price: 500,
  },
  {
    id: "e4",
    title: "Travel",
    date: new Date(2023, 3, 30),
    place: "Bengaluru",
    price: 1000,
  },
];

function App() {
  const [expenses,setExpenses]= useState(DummyExpenses);

  const addExpenseHandler = (expense) => {    
    setExpenses((prevExpenses)=>{
      return ([expense, ...expenses]);
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
