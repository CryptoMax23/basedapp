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
      <Header title="Based Memes" />
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
          font-size: 14px; /* Adjust font size as needed */
        }
        .search-input {
          flex: 1;
        }
        .search-button {
          margin-left: 10px;
          padding: 10px 15px;
          background-color: #0070f3; /* Example color */
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .search-button:hover {
          background-color: #0058ad; /* Darker shade on hover */
        }
        .create-meme-button {
          margin-bottom: 20px;
          padding: 12px 20px;
          background-color: #4caf50; /* Example color */
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .create-meme-button:hover {
          background-color: #45a049; /* Darker shade on hover */
        }
        .content-section {
          /* Add styles for content section */
        }
      `}</style>
    </div>
  );
};

export default Home;
