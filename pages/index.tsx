// pages/index.tsx (or Home.tsx)
import Head from 'next/head';
import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';
import UploadModal from '../components/UploadModal';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement actual search functionality here (e.g., fetch memes)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Based Memes</title>
      </Head>
      <Header title="Based Memes" buttonText="Create a Meme" />
      <main className="main-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <select className="search-select">
            <option value="all">All</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for memes"
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <button onClick={openModal} className="create-meme-button">Create a Meme</button>
        <UploadModal isOpen={isModalOpen} onClose={closeModal} />
        <section className="content-section">
          {/* Add content here */}
        </section>
      </main>
      <style jsx>{`
        .main-container {
          padding: 20px;
        }
        .search-form {
          display: flex;
          margin-bottom: 20px;
        }
        .search-select,
        .search-input {
          margin-right: 10px;
          padding: 10px;
        }
        .search-input {
          flex: 1;
        }
        .search-button {
          margin-left: 10px;
        }
        .create-meme-button {
          margin-bottom: 20px;
        }
        .content-section {
          /* Add styles for content section */
        }
      `}</style>
    </div>
  );
};

export default Home;
