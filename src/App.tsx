import React from 'react';
import InputField from "./components/InputField";

export default function App() {
  return (
    <div style={{maxWidth: "300px", border: "1px solid", padding: "10px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px", margin: "0 auto", marginTop: "100px"}}>
      <h1>Login</h1>
      <InputField label="Username" type="text" name="username" />
      <InputField label="Password" type="password" name="password" />
      <button>Login</button>
    </div>
  );
}
