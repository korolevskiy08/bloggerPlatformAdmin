import React, { ChangeEvent, FC, useState } from 'react';

import { Button } from '../../../../layout/Button/Button';
import style from '../../../../layout/global.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import titleImg from '../../../images/pexels-photo-268533.webp';
import { Select } from '../../Select/Select';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './createPost.module.css';

type CreatePostModalType = {
  isOpen: boolean;
  onClose: () => void;
  createItem: (title: string, blogId: string, content: string) => void;
  titleModal: string;
};

export const CreatePostModal: FC<CreatePostModalType> = ({
  titleModal,
  createItem,
  onClose,
  isOpen,
}) => {
  const blogs = useAppSelector(state => state.blogs.blogs);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<typeof blogs[0] | undefined>(blogs[0]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };

  const createItemHandler = (): void => {
    createItem(title, value!.id, description);
    setTitle('');
    setDescription('');
  };

  return (
    <BasicModal
      open={isOpen}
      className={styles.modalBlock}
      onClose={onClose}
      title={titleModal}
    >
      <div className={styles.modalBlock}>
        <div className={styles.titleImgBlock}>
          <img src={titleImg} alt="title img" />
        </div>
        <p className={`titleName ${styles.postName}`}>Post Name</p>
        <input
          type="text"
          className={`titleName ${styles.input}`}
          value={title}
          onChange={onChangeTitle}
        />
        <p className={`titleName ${styles.postName}`}>Blog</p>
        <Select options={blogs} onChange={o => setValue(o)} value={value} />
        <p className={`titleName ${styles.postName}`}>Description</p>
        <textarea
          className={styles.descriptionText}
          onChange={onChangeDescription}
          value={description}
        />
        <div className={styles.button}>
          <Button
            title="Publish"
            onclick={createItemHandler}
            styleButton={style.button}
          />
        </div>
      </div>
    </BasicModal>
  );
};
