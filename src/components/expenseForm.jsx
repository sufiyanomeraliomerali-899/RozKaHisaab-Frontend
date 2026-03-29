import { useState } from "react";
import "./expenseForm.css";

export default function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <span>
        <label htmlFor="title">Title :</label>
        &nbsp; &nbsp;
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </span>

      <span>
        <label htmlFor="amount">Amount :</label>
        &nbsp; &nbsp;
        <input
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </span>

      <button type="submit">Add</button>
    </form>
  );
}
