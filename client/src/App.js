import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const GET_USER = gql`
    query User($id: ID!) {
      user(id: $id) {
        id
        name
        age
        company {
          id
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: "1" },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{data?.user.id || ""}</p>
          <p>{data?.user.name || ""}</p>
          <p>{data?.user.age || ""}</p>
          <p>{data?.user.company.name || ""}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
