export default function Stats({ items }) {
    //early return om inget item finns i arrayen
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding todos</em>
        </p>
      );
  
    //Annars detta
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed === true).length;
    const numPercent = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {numPercent === 100
            ? "Nice! You have no more todos."
            : `
          You have ${numItems} todo on your list, and you already finished
          ${numPacked} (${numPercent} %)`}
        </em>
      </footer>
    );
  }
  