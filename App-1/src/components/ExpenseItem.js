import "./ExpenseItem.css";

//Instead of title, date, amount we can simply use props for all 3 as function parameters.
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-us", {
    month: "long",
  });
  const day = props.date.toLocaleString("en-us", {
    day: "2-digit",
  });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
