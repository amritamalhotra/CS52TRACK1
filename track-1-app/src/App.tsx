import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

function App() {
  const quotes = useQuery(api.quotes.getQuotes);
  const addquote = useMutation(api.quotes.addQuote);
  const [userQuote, setUserQuote] = useState<string>("");

  const handleClick = async () => {
    await addquote({ text: userQuote });
  };

  return (
    <div className="App">
      <p className="font-bold">QUOTES!!!</p>
      {quotes?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <div>
        <div style={{ color: "red" }}>
          New quote here: <input value={userQuote} onChange={(event) => setUserQuote(event.target.value)}/>
          </div>
      </div>
      <button onClick={handleClick}>Enter your quote!</button>
    </div>
  );
}

export default App;