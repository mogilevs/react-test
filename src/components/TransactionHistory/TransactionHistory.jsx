import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  let changingBgColor = "gray";
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableHead}>
          <th className={css.tableHeadCell}>Type</th>
          <th className={css.tableHeadCell}>Amount</th>
          <th className={css.tableHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          changingBgColor = changingBgColor === "gray" ? "white" : "gray";
          return (
            <Transaction
              key={item.id}
              variant={changingBgColor}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            ></Transaction>
          );
        })}
      </tbody>
    </table>
  );
}
