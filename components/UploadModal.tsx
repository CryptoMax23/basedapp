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

  // Handles file selection and preview generation
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

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file.');
      return;
    }

    try {
      // Create FormData object and append file, description, and tags
      const formData = new FormData();
      formData.append('file', file);
      formData.append('description', description);
      formData.append('tags', tags);

      // Example: Replace with actual endpoint URL for file upload
      const response = await fetch('https://api.example.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        onClose(); // Close modal after successful upload
      } else {
        alert('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>Upload a Based Meme</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.fileInput}>
            <label htmlFor="memeFile">Select Meme:</label>
            <input
              type="file"
              id="memeFile"
              accept="image/*"
              onChange={handleFileChange}
              required
              className={styles.inputFile}
            />
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
              className={styles.inputText}
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
              className={styles.inputText}
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