function User({ userName, textColor = "white" }) {
  let styles = { color: textColor };
  return (
    <div style={styles}>
      <h1>Username: {userName}</h1>
      <h2>Text Color: {textColor}</h2>
    </div>
  );
}

export { User };
