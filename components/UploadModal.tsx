// components/UploadModal.tsx
import React, { useState } from 'react';
import styles from './UploadModal.module.css';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file upload logic
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>Upload a Meme</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.fileInput}>
            <label htmlFor="memeFile">Select Meme:</label>
            <input type="file" id="memeFile" accept="image/*" onChange={handleFileChange} required />
          </div>
          {preview && <div className={styles.preview}><img src={preview} alt="Meme Preview" /></div>}
          <div className={styles.descriptionInput}>
            <label htmlFor="memeDescription">Description:</label>
            <input
              type="text"
              id="memeDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description..."
              required
            />
          </div>
          <div className={styles.tagsInput}>
            <label htmlFor="memeTags">Tags:</label>
            <input
              type="text"
              id="memeTags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter tags..."
            />
          </div>
          <button type="submit" className={styles.uploadButton}>Upload</button>
          <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
