import { Link } from 'react-router-dom';

const myArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

function Users() {
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {myArray.map(x => (
          <li key={x.id}> {x.id}, {x.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

