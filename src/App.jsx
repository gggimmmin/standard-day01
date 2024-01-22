import React, { useState } from "react";
import "./App.css";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach((fruits, index) => {
      tempResult += `${index}: ${fruits}, `;
    });
    setResult(tempResult);
  };

  const handleFilter = () => {
    const filteredList = array.filter((fruits) => {
      if (fruits.includes(query)) {
        return true;
      }
      return false;
    });
    setResult(filteredList.join(","));
  };

  const handleMap = () => {
    const mappedList = array.map((fruits) => {
      return fruits.toUpperCase();
    });
    setResult(mappedList.join(","));
  };

  const handleReduce = () => {
    const reducedList = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    if (!query) {
      alert("값을 입력해주세요 !");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const newArr = array.slice(0, 3);
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = () => {
    const newArr = array.indexOf(query);
    if (newArr !== -1) {
      setArray(newArr);
      setResult(newArr);
    } else {
      alert(`${query}는 존재하지 않습니다.`);
    }
  };

  const handleIncludes = () => {
    const newArr = array.includes(query);
    setResult(newArr ? "true" : "false");
  };

  const handleFind = () => {
    const newArr = array.find((fruit) => fruit.includes(query));

    if (newArr) {
      setResult(newArr);
    } else {
      setResult("Not Found");
    }
  };

  const handleSome = () => {
    const newArr = array.some((fruit) => fruit.includes(query));
    setResult(newArr ? "true" : "false");
  };

  const handleEvery = () => {
    const newArr = array.every((fruit) => fruit.length > 5);
    setResult(newArr ? "true" : "false");
  };

  const handleSort = () => {
    const newArr = [...array].sort((a, b) => b.localeCompare(a));
    setResult(newArr.join(", "));
  };

  return (
    <div className="main">
      <div>
        <h1>Standard반 배열 API</h1>
        <input
          placeholder="Enter text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
      </div>
      <div className="array-box">
        <strong>원본배열 : </strong> {initialArray.join(",")}
      </div>
      <div className="result-box">
        <strong>결과물 : </strong> {result}
      </div>
    </div>
  );
}

export default App;
