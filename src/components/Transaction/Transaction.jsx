import "./Transaction.css";

export default function Transaction({ type, amount, currency, variant }) {
  return (
    <tr className={variant}>
      <td className="typeCell">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
