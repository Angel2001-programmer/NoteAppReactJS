import { useState } from "react";

const UserInput = props => {
  const [currentsavings, setCurrentSavings] = useState(0);
  const [yearlysavings, setYearlySavings] = useState(0);
  const [expectedinterest, setExpectedInterest] = useState(0);
  const [investmentduration, setInvestmentDuration] = useState(0);

const CurrentSavingsHandler = (e) => {
  setCurrentSavings(e.target.value);
}

const YearlySavingsHandler = (e) => {
  setYearlySavings(e.target.value);
}

const ExpectedInterestHandler = (e) => {
  setExpectedInterest(e.target.value);
}

const InvestmentDurationHandler = (e) => {
  setInvestmentDuration(e.target.value);
}

const onSumbit = (e) => {
  props.calculateHandler(
    currentsavings, 
    yearlysavings, 
    expectedinterest, 
    investmentduration
    );
  alert("Sumbit has been pressed");
  e.preventDefault();
  props.onChangeValid(true);
}

const onReset = () => {
  alert("Reset has been pressed");
  setInvestmentDuration(0);
  setExpectedInterest(0);
  setYearlySavings(0);
  setCurrentSavings(0);
  props.onChangeValid(false);
}

    return(
<form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentsavings} onChange={CurrentSavingsHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlysavings} onChange={YearlySavingsHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedinterest} onChange={ExpectedInterestHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={investmentduration} onChange={InvestmentDurationHandler}/>
          </p>
        </div>
        <p className="actions">
          <button onClick={onReset} type="reset" className="buttonAlt">
            Reset
          </button>
          <button onClick={onSumbit} type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default UserInput;