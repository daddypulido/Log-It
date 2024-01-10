import React, { useState } from 'react';

const Profile = () => {
  const [textInput, setTextInput] = useState('');
  const [numberInput1, setNumberInput1] = useState('');
  const [numberInput2, setNumberInput2] = useState('');
  const [numberInput3, setNumberInput3] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [formError, setFormError] = useState(false);

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleNumber1Change = (event) => {
    setNumberInput1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumberInput2(event.target.value);
  };

  const handleNumber3Change = (event) => {
    setNumberInput3(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!textInput || !numberInput1 || !numberInput2 || !numberInput3) {
      setFormError(true);
      return;
    }

    setFormError(false);

    const newData = {
      textInput,
      numberInput1,
      numberInput2,
      numberInput3,
    };
    setSubmittedData([...submittedData, newData]);
    setTextInput('');
    setNumberInput1('');
    setNumberInput2('');
    setNumberInput3('');
  };

  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <form
        style={{
          color: 'white',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '20px',
          justifyContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={textInput}
          onChange={handleTextChange}
          required
        />
        <input
          type="number"
          value={numberInput1}
          onChange={handleNumber1Change}
          required
        />
        <input
          type="number"
          value={numberInput2}
          onChange={handleNumber2Change}
          required
        />
        <input
          type="number"
          value={numberInput3}
          onChange={handleNumber3Change}
          required
        />
        <button type="submit">Submit</button>
        <label>Workout Name</label>
        <label>Sets</label>
        <label>Reps</label>
        <label>Weight</label>
        {/* Empty cell for the button */}
        <div></div>
      </form>

      {formError && <p>Please fill in all fields</p>}

      <div>
        <h2 style={{ color: 'white' }}>Log:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {submittedData.map((data, index) => (
            <li
              key={index}
              style={{
                color: 'white',
                marginBottom: '10px',
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <span>{data.textInput}</span>
              <span> {data.numberInput1}</span>
              <span>{data.numberInput2}</span>
              <span> {data.numberInput3}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;