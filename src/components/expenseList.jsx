import "./expList.css";

export default function ExpenseList({ expArr, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>

      {expArr.length === 0 && <p>No expenses added yet.</p>}

      {expArr.map((exp) => (
        <div key={exp._id} className="expense-item">
          <p id="expTitle">Title : {exp.title}</p>
          <br />
          <p>Amount : ₹{exp.amount}</p>
          <br />
          <button onClick={() => deleteExpense(exp._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
