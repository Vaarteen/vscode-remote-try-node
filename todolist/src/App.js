function Welcome(props) {
  return <h1>Bonjour, {props.nom}</h1>;
}
function Main() {
  return (
    <main>
      <Welcome nom="Bob" />
    </main>
  )
}

function App() {
  return <Main />;
}

export default App;
