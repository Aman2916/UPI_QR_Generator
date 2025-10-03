import QRCode from "react-qr-code";
import React from "react";

function App() {
  const [qrValue, setQrValue] = React.useState("");
  const [name, setName] = React.useState("");

  const changeQr = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrValue(name);
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your UPI ID"
          style={{ marginBottom: 20, padding: 10, width: "80%" }}
          value={name}
          onChange={changeQr}
        />
        <button type="submit">Submit</button>
      </form>

      {qrValue && (
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      )}
    </div>
  );
}

export default App;
