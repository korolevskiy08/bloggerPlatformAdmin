import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import avatar from '../../../common/images/images.jpg';
import imagePost from '../../../common/images/pexels-photo-268533.webp';
import { Settings } from '../../Blogs/Settings/Settings';

import styles from './post.module.css';

type PostType = {
  blogName: string;
  content: string;
  createdAt: string;
  id: string;
};

export const Post: FC<PostType> = ({ blogName, content, createdAt, id }) => {
  const navigate = useNavigate();

  const navigatePostItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Post/${id}`);
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
            <h3 className={styles.titlePost}>{blogName}</h3>
            <p className={styles.descriptionText}>{content}</p>
            <p className={styles.date}>{createdAt}</p>
          </div>
          <Settings
            deleteItemHandler={() => {}}
            textModals="Are you sure want to delete this post?"
            titleModals="Delete a post"
          />
        </div>
      </div>
    </div>
  );
};
