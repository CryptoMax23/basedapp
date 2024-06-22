import Head from 'next/head';
import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <div>
      <Head>
        <title>Memes</title>
      </Head>
      <Header title="Based Memes" buttonText="Create a Meme" />
      <main style={{ padding: '20px' }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
          <select style={{ marginRight: '10px', padding: '10px' }}>
            <option value="all">All</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for memes"
            style={{ flex: 1, padding: '10px' }}
          />
          <button type="submit" style={{ marginLeft: '10px' }}>Search</button>
        </form>
        <section>
          {/* Add content here */}
        </section>
      </main>
    </div>
  );
};

export default Home;
