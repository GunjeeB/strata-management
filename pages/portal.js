import React, { useState } from 'react';
import styles from '../styles/Portal.module.css';

export default function Portal() {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submitted ID here, for example, check the ID or save it.
    alert('Portal ID entered: ' + id);
  };

  return (
    <div className={styles.portalContainer}>
      <div className={styles.portalContent}>
        <h1 className={styles.portalTitle}>Welcome to the Portal</h1>
        <p className={styles.portalDescription}>
          This is the portal section where you can access all information about funds, activities, reports, and more. You’ll find details about what has been funded, what activities we’ve organized, and how your contributions are making a difference.
        </p>
        
        <p className={styles.portalCallToAction}>
          If you want to see how we work, please <strong>join us</strong> and get involved in our community. We are always looking for passionate people to help us build a better future together!
        </p>

        <form onSubmit={handleSubmit} className={styles.portalForm}>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            className={styles.inputField}
          />
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}
