import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withDrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state=useSelector((state)=> state.bank)
  return (
    <div className="App">
      <h1>0</h1>
      <button>Deposit</button>
      <button>withdraw</button>
      <button>bankrupt</button>
    </div>
  );
}

export default App;
