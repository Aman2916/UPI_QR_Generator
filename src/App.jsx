import QRCode from "react-qr-code";

function App() {
  return (
    <div className="app">
      <h1>QR Generator</h1>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value="random"
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default App;
