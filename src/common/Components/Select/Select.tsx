import React, { FC, useState } from 'react';

import { BlogType } from '../../../features/Blogs/blogs-api';

import styles from './select.module.css';

type SelectType = {
  blogs: BlogType[];
  onChange: (value: any) => void;
  value: BlogType;
};

export const Select: FC<SelectType> = ({ blogs, onChange, value }) => {
  const [active, setActive] = useState(false);

  const setActiveHandler = (): void => {
    setActive(!active);
  };

  const setValue = (blog: BlogType): void => {
    onChange(blog);
    setActive(false);
  };

  return (
    <div className={styles.select}>
      <div
        className={styles.selectBlock}
        onChange={onChange}
        role="presentation"
        onClick={setActiveHandler}
      >
        {value.name}
      </div>
      <div className={styles.options}>
        {active &&
          blogs.map(el => {
            return (
              <div
                role="presentation"
                onClick={() => setValue(el)}
                className={styles.option}
                key={el.id}
              >
                <p className={`titleName ${styles.titleSelect}`}>{el.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
