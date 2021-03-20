import React, { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt='Income' />
        </header>
        <strong>$1000.00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt='Outcome' />
        </header>
        <strong>-$200.00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt='Total' />
        </header>
        <strong>$800.00</strong>
      </div>
    </Container>
  );
}
