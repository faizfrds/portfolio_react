function ListGroup() {
  let items = ["New York", "Boston", "Amherst", "Tokyo", "Paris"];

  return (
    <>
      <h1>list</h1>
      { items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/*mapping and wrapping item into a different type so that JSX can take it; almost a replacement for a forloop*/}
      </ul>
    </>
  );
}

export default ListGroup;
