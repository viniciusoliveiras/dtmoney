import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';
import { api } from '../../services/api';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle('');
    setAmount(0);
    setType('');
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Close' />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder='Price'
          type='number'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>{' '}
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Outcame' />
            <span>Outcame</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Register</button>
      </Container>
    </Modal>
  );
}
