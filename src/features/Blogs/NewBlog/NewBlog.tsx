import React, { ChangeEvent, FC, useState } from 'react';

import arrowLeft from '../../../common/icons/arrow-left.svg';
import arrowRight from '../../../common/icons/arrow_right.svg';
import titleImg from '../../../common/images/blue-ocean-28668-2560x1600.jpg';
import { Button } from '../../../layout/Button/Button';
import style from '../../../layout/global.module.css';

import styles from './newBlog.module.css';

export const NewBlog: FC = () => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const onChangeWebsite = (e: ChangeEvent<HTMLInputElement>): void => {
    setWebsite(e.currentTarget.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };

  return (
    <div className={styles.newBlog}>
      <div className={styles.titleBlock}>
        <p className={`titleName ${styles.blog}`}>Blogs</p>
        <img src={arrowRight} alt="arrow" />
        <p className={`titleName ${styles.add}`}>Add</p>
      </div>
      <div className={styles.backBlogs}>
        <img src={arrowLeft} alt="arrow" />
        <p className={`titleName ${styles.backText}`}>Back to blogs</p>
      </div>
      <div className={styles.titleImage}>
        <img src={titleImg} alt="title" />
      </div>
      <p className={`titleName ${styles.name}`}>Blog Name</p>
      <input
        onChange={onChangeName}
        value={name}
        type="text"
        className={`inputName ${styles.inputName}`}
        placeholder="Name"
      />
      <p className={`titleName ${styles.name}`}>Website</p>
      <input
        type="text"
        onChange={onChangeWebsite}
        value={website}
        className={`inputName ${styles.inputName}`}
        placeholder="Website"
      />
      <p className={`titleName ${styles.name}`}>Blog Description</p>
      <textarea
        onChange={onChangeDescription}
        value={description}
        className={`titleName ${styles.textarea}`}
        placeholder="Description"
      />
      <div className={styles.button}>
        <Button title="Add blog" onclick={() => {}} styleButton={style.addBlogButton} />
      </div>
    </div>
  );
};
