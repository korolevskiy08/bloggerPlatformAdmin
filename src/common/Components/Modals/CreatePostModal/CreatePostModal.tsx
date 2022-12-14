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
  editMode?: boolean;
  name?: string;
  content?: string;
};

export const CreatePostModal: FC<CreatePostModalType> = ({
  titleModal,
  createItem,
  onClose,
  isOpen,
  content,
  name,
  editMode,
}) => {
  const blogs = useAppSelector(state => state.blogs.blogs);
  const [title, setTitle] = useState(editMode ? name : '');
  const [description, setDescription] = useState(editMode ? content : '');
  const [value, setValue] = useState<typeof blogs[0] | undefined>(blogs[0]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };

  const createItemHandler = (): void => {
    createItem(title!, value!.id, description!);
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
        <p className={`text ${styles.postName}`}>Post Name</p>
        <input
          type="text"
          className={`text ${styles.input}`}
          value={title}
          onChange={onChangeTitle}
        />
        {editMode ? null : (
          <>
            <p className={`text ${styles.postName}`}>Blog</p>
            <Select options={blogs} onChange={o => setValue(o)} value={value} />
          </>
        )}
        <p className={`text ${styles.postName}`}>Description</p>
        <textarea
          className={styles.descriptionText}
          onChange={onChangeDescription}
          value={description}
        />
        <div className={styles.button}>
          <Button onclick={createItemHandler} styleButton={style.button}>
            Publish
          </Button>
        </div>
      </div>
    </BasicModal>
  );
};
