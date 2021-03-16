import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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

      <Container>
        <h2>Register transaction</h2>

        <input placeholder='Title' />

        <input placeholder='Price' type='number' />

        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='Income' />
            <span>Income</span>{' '}
          </button>
          <button type='button'>
            <img src={outcomeImg} alt='Outcame' />
            <span>Outcame</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='Category' />

        <button type='submit'>Register</button>
      </Container>
    </Modal>
  );
}
