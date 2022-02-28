import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [enteredDate, setEnteredDate] = useState<string>('02/24/2023');
  const [secondEnteredDate, setSecondEnteredDate] =
    useState<string>('10/01/2021');
  useState<string>('02/24/2022');

  const enterDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const secondEnteredDateHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondEnteredDate(event.target.value);
  };

  let transormedDate = new Date(enteredDate);
  let transformedDate2 = new Date(secondEnteredDate);

  const difference: number = Math.abs(
    transormedDate.getTime() - transformedDate2.getTime()
  );
  const differenceInDays: number = Math.floor(difference / (1000 * 3600 * 24));
  // const day = today.getDate();

  return (
    <div className={styles['main-container']}>
      <div>
        <div className={styles['date-input']}>
          <label htmlFor="firstDate">First date</label>
          <input
            id="firstDate"
            type="date"
            value={enteredDate}
            onChange={enterDateHandler}
          />
        </div>
        <div className={styles['date-input']}>
          <label htmlFor="secondDate">Second date</label>
          <input
            id="secondDate"
            type="date"
            value={secondEnteredDate}
            onChange={secondEnteredDateHandler}
          />
        </div>
      </div>
      <p className={styles['date-result']}>
        There are <span className={styles['date']}>{differenceInDays}</span>{' '}
        days <br />
        from <span className={styles['date']}>{enteredDate}</span> to{' '}
        <span className={styles['date']}>{secondEnteredDate}</span>
      </p>
    </div>
  );
}

export default App;
