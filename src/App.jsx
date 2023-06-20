import React, { useEffect, useState } from "react";
import { marked } from "marked";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import "./app.css";
import "./normalize.css";
import remarkGfm from "remark-gfm";
import Select from "./components/Select";

function App() {
  const [input, setInput] = useState("# Welcome. \nJust Start Typing");
  const [output, setOutput] = useState("parsed");

  const handleInput = (e) => {
    setInput((i) => e.target.value);
  };

  const handleOutput = (state) => {
    setOutput(() => state);
  };

  console.log(marked.parse(input));

  return (
    <div className="app">
      <form>
        <textarea value={input} onChange={handleInput}></textarea>
      </form>
      <div>
        <Select states={["html", "parsed"]} handleState={handleOutput} />
        {output === "parsed" && (
          <ReactMarkdown
            className="markdown"
            children={input}
            remarkPlugins={[remarkGfm]}
          />
        )}
        {output === "html" &&
          marked
            .parse(input)
            .split("\n")
            .map((line) => <p>{line}</p>)}
      </div>
    </div>
  );
}

export default App;
