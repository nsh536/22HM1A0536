import React, { useState } from "react";
import { saveUrl, getAllUrls } from "../services/storage";
import { generateCode } from "../utils/shortcode";
import { validateUrl } from "../utils/validation";
import UrlRow from "../components/UrlRow";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState(getAllUrls());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      alert("Please enter a valid URL!");
      return;
    }
    const code = generateCode();
    saveUrl(code, url);
    setUrls(getAllUrls());
    setUrl("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      <h2>Saved URLs</h2>
      {urls.map((u) => (
        <UrlRow key={u.code} code={u.code} original={u.original} />
      ))}
    </div>
  );
}

export default ShortenerPage;
