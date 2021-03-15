import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => console.log(data));
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
