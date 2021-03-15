import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className='deposit'>$12000</td>
            <td>Development</td>
            <td>15/03/2021</td>
          </tr>

          <tr>
            <td>House rent</td>
            <td className='withdraw'>-$1100</td>
            <td>Rent</td>
            <td>06/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
