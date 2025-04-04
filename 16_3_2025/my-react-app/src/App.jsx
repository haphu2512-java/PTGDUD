import { useEffect, useState } from 'react';
import ItemsChange from './components/ItemsImage';
import Header from './components/Header';
import MenuLeft from './components/MenuLeft';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://67cd2e86dd7651e464ed8f72.mockapi.io/User')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.map(user => ({ id: user.id, name: user.name, image: user.image })))  // Ensure data is valid
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <MenuLeft className="flex" />
        <ItemsChange className="flex" array={users} />
      </div>
    </>
  );
}

export default App;
