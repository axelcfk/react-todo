export default function Item({ item, handleDeleteItems, handleToggleItem }) {
  return (
    <li className="item">
      <input className="checkbox"
        type="checkbox"
        value={item.packed}
        onChange={() => {
          handleToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {""}
        {item.input}
      </span>
      <button className="closeBtn" onClick={() => handleDeleteItems(item.id)}>𝕏</button>
    </li>
  );
}
