import PropTypes from "prop-types";

export default function TransationHistory ({items}) {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(item => (
      <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ))}
  </tbody>
</table>
    );
}

TransationHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        // type: PropTypes.string.isRequired,
        // amount: PropTypes.number.isRequired,
        // currency: PropTypes.string.isRequired,
    }),
    )
}
    