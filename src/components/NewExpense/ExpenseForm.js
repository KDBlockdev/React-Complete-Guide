import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control"></div>
      <label>Title</label>
      <input type="text" />
      <div />
      <div className="new-expense__control"></div>
      <label>Amount</label>
      <input type="number" min="0.01" step="0.01 " />
      <div />
      <div className="new-expense__control"></div>
      <label>Date</label>
      <input type="date" min="2019-01-01" step="2022-12-31" />
      <div />
      <div />
      <div className="new-expense__actions"></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
