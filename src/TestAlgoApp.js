import './App.css';
// import './Test';


const FIZZBUZZSIZE = 50



// Best readability, Danger is to forget continue
//We test %15 to save test (%3 && %5)
function fizzBuzzContinue(size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
      continue;
    }
    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }
    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }

    result.push(i);

  }
  return result;
}

//Same with if else here instruction are short so it's readable on larger code can be a mess
function fizzBuzzIfElse(size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }

  }
  return result;
}

//for those prefering while (take care to the values à the limit)
function fizzBuzzWhile(size) {
  var result = [];
  var i = 0;
  while (i < size) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
    i++;
  }
  return result;
}




function increment(arrayOfDigit) {
  for (var i = arrayOfDigit.length - 1; i >= 0; i--) {
    arrayOfDigit[i]++; // increment the current digit
    if (i > -1) { // the new value, if not the first value
      arrayOfDigit[i] %= 10;
    }
    if (arrayOfDigit[i] > 0) {
      // We have incremented +1 the array of digit. goal done. stop iterating
      break;
    }
    //special case,  if array needs to be enlarged eg: 9999 -> 10000
    if (i === 0 && arrayOfDigit[i] === 0) {
      arrayOfDigit = [1, ...arrayOfDigit]
    }
  }
  return arrayOfDigit;
}



function TestAlgoApp() {

  var computedFizzBuzzContinue = fizzBuzzContinue(FIZZBUZZSIZE);
  var uiFizzBuzzContinue = computedFizzBuzzContinue.map((element) => {
    return <span className="App-flowcontainer1">{element}<span style={{ color: "yellow", fontWeight: "bold" }} > |</span></span>;
  })
  var computedFizzBuzzIfElse = fizzBuzzIfElse(FIZZBUZZSIZE);
  var uiFizzBuzzIfElse = computedFizzBuzzIfElse.map((element) => {
    return <span className="App-flowcontainer1">{element}<span style={{ color: "yellow", fontWeight: "bold" }} > |</span></span>;
  })
  var computedFizzBuzzWhile = fizzBuzzWhile(FIZZBUZZSIZE);
  var uiFizzBuzzWhile = computedFizzBuzzWhile.map((element) => {
    return <span className="App-flowcontainer1">{element}<span style={{ color: "yellow", fontWeight: "bold" }} > |</span></span>;
  })

  var incrementedArray = increment([9,9,9,9]);
  var uiIncrementedArray = incrementedArray.map((element) => {
    return <span className="App-flowcontainer1">{element}<span style={{ color: "yellow", fontWeight: "bold" }} >,</span></span>;
  })


  return (



    <div className="App">
      <header className="App-header">
        <span>FizzBuzz output Count {FIZZBUZZSIZE}</span>
        <span>FizzBuzz(Continue)</span>
        <br/>
        <span className="App-FizzBuzzLog">{uiFizzBuzzContinue}</span>
        <span>FizzBuzz (IfElse)</span>
        <br/>
        <span className="App-FizzBuzzLog">{uiFizzBuzzIfElse}</span>
        <span>FizzBuzz (While)</span>
        <br/>
        <span className="App-FizzBuzzLog">{uiFizzBuzzWhile}</span>
        <br/> <br/> <br/>
        <span>Increment Array</span>
        <br/>
        <span className="App-FizzBuzzLog">{uiIncrementedArray}</span>
      </header>
    </div>
  );
}

export default TestAlgoApp;
