import Item from "./Item";

export default function TodoList({
  items,
  handleDeleteItems,
  handleToggleItem,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItems={handleDeleteItems}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
