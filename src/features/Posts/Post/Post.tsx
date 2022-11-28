import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import avatar from '../../../common/images/images.jpg';
import imagePost from '../../../common/images/pexels-photo-268533.webp';
import { Settings } from '../../Blogs/Settings/Settings';
import { deletePost } from '../posts-actions';

import styles from './post.module.css';

type PostType = {
  name: string;
  content: string;
  createdAt: string;
  id: string;
};

export const Post: FC<PostType> = ({ name, content, createdAt, id }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigatePostItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Post/${id}`);
  };

  const deletePostHandler = (): void => {
    dispatch(deletePost(id));
  };

  const openEditModal = (): void => {
    setShowEditModal(true);
  };

  return (
    <div className={styles.postBlock}>
      <div className={styles.imgPost}>
        <img src={imagePost} alt="avatar" />
      </div>
      <div>
        <div className={styles.descriptionBlock}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <div
            className={styles.description}
            role="presentation"
            onClick={navigatePostItem}
          >
            <h3 className={styles.titlePost}>{name}</h3>
            <p className={styles.descriptionText}>{content}</p>
            <p className={styles.date}>{createdAt}</p>
          </div>
          <Settings
            showEditModal={showEditModal}
            navigateEditBlog={openEditModal}
            deleteItemHandler={deletePostHandler}
            textModals="Are you sure want to delete this post?"
            titleModals="Delete a post"
          />
        </div>
      </div>
    </div>
  );
};
