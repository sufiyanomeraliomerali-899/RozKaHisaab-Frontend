import { useEffect, useState } from "react";
import ExpenseForm from "./components/expenseForm";
import ExpenseList from "./components/expenseList";
import "./App.css";

import {
  getExpenses,
  addExpense as addExpenseAPI,
  deleteExpense as deleteExpenseAPI,
} from "./api/expenseApi";

function App() {
  const [expArr, setExpArr] = useState([]);

  // Load expenses
  useEffect(() => {
    async function loadExpenses() {
      try {
        const res = await getExpenses();
        setExpArr(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadExpenses();
  }, []);

  // Add expense
  async function addExpense(expense) {
    try {
      const res = await addExpenseAPI(expense);
      setExpArr((prev) => [...prev, res.data]);
    } catch (err) {
      console.log(err);
    }
  }

  // Delete expense
  async function deleteExpense(id) {
    try {
      await deleteExpenseAPI(id);
      setExpArr((prev) => prev.filter((exp) => exp._id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const totalAmount = expArr.reduce(
    (total, exp) => total + Number(exp.amount),
    0,
  );

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="title">Expense Tracker</h1>
          <h1 className="total-amount">Total: ₹ {totalAmount}</h1>
        </div>

        <div className="body">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expArr={expArr} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
