import React, { ChangeEvent, FC, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import arrowLeft from '../../../common/icons/arrow-left.svg';
import arrowRight from '../../../common/icons/arrow_right.svg';
import titleImg from '../../../common/images/blue-ocean-28668-2560x1600.jpg';
import { Path } from '../../../common/Routes';
import { Button } from '../../../layout/Button/Button';
import style from '../../../layout/global.module.css';
import { editBlog } from '../../Blog/blog-actions';
import { EditBlogType } from '../../Blog/blog-api';
import { addNewBlog } from '../blogs-actions';

import styles from './addEditBlog.module.css';

type NewBlogType = {
  editMode?: boolean;
};

export const AddEditBlog: FC<NewBlogType> = ({ editMode }) => {
  const location = useLocation();
  const [name, setName] = useState(editMode ? location.state.name : '');
  const [websiteUrl, setWebsite] = useState(editMode ? location.state.websiteUrl : '');
  const [description, setDescription] = useState(
    editMode ? location.state.description : '',
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateBlogs = (): void => {
    navigate(Path.Blogs);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const onChangeWebsite = (e: ChangeEvent<HTMLInputElement>): void => {
    setWebsite(e.currentTarget.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };

  const addBlog = (): void => {
    dispatch(
      addNewBlog({
        name,
        description,
        websiteUrl,
      }),
    )
      .unwrap()
      .then(() => {
        navigate(Path.Blogs);
      })
      .catch((e: any) => {
        alert(e.message);
      });
  };

  const editBlogHandler = (): void => {
    dispatch(
      editBlog({
        data: {
          name,
          description,
          websiteUrl,
        },
        id: location.state.id,
      } as EditBlogType),
    )
      .unwrap()
      .then(() => {
        navigate(Path.Blogs);
      })
      .catch((e: any) => {
        alert(e.message);
      });
  };

  return (
    <div className={styles.newBlog}>
      {editMode ? (
        <div className={styles.titleBlock}>
          <p
            role="presentation"
            onClick={navigateBlogs}
            className={`titleName ${styles.blog}`}
          >
            Blogs
          </p>
          <img src={arrowRight} alt="arrow" />
          <p>{location.state.name}</p>
          <img src={arrowRight} alt="arrow" />
          <p>Edit</p>
        </div>
      ) : (
        <div className={styles.titleBlock}>
          <p className={`titleName ${styles.blog}`}>Blogs</p>
          <img src={arrowRight} alt="arrow" />
          <p className={`titleName ${styles.add}`}>Add</p>
        </div>
      )}
      <div className={styles.backBlogs}>
        <img src={arrowLeft} alt="arrow" />
        <p
          role="presentation"
          onClick={navigateBlogs}
          className={`titleName ${styles.backText}`}
        >
          Back to blogs
        </p>
      </div>
      <div className={styles.titleImage}>
        <img src={titleImg} alt="title" />
      </div>
      <p className={`titleName ${styles.name}`}>BlogItem Name</p>
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
        value={websiteUrl}
        className={`inputName ${styles.inputName}`}
        placeholder="Website"
      />
      <p className={`titleName ${styles.name}`}>BlogItem Description</p>
      <textarea
        onChange={onChangeDescription}
        value={description}
        className={`titleName ${styles.textarea}`}
        placeholder="Description"
      />
      {editMode ? (
        <div className={styles.button}>
          <Button
            title="Edit BlogItem"
            onclick={editBlogHandler}
            styleButton={style.button}
          />
        </div>
      ) : (
        <div className={styles.button}>
          <Button title="Add blog" onclick={addBlog} styleButton={style.button} />
        </div>
      )}
    </div>
  );
};
