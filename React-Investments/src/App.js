import ResultsTable from './componenets/ResultsTable/ResultsTable';
import UserInput from './componenets/UserInput/UserInput';
import logo from './assets/investment-calculator-logo.png';
import Header from './componenets/Headers/Header';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null); 
  const [IsValid, setIsValid] = useState(true); 

  let ResultEvent = null;
  let currentSavingsprop = null

  if(IsValid && data != null){
    ResultEvent = <ResultsTable data={data} initialInvestment={currentSavingsprop}/>
  } else {
    ResultEvent = <h1 className='errorTitle'>No results recorded.</h1>
  }

  const calculateHandler = (currentsavings, yearlysavings, expectedinterest, investmentduration) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let yearlyData = []; // per-year results

    currentSavingsprop = currentsavings; // feel free to change the shape of this input object!
    const yearlyContribution = yearlysavings; // as mentioned: feel free to change the shape...
    const expectedReturn = expectedinterest / 100;
    const duration = investmentduration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavingsprop * expectedReturn;
      currentSavingsprop += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsprop,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
      setData(yearlyData);
  };


  return (
    <div>
      <Header logo={logo}/>
      <UserInput calculateHandler={calculateHandler} IsValid={IsValid} onChangeValid={setIsValid}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {ResultEvent}
    </div>
  );
}

export default App;
