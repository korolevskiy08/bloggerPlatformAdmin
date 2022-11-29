import React, { FC } from 'react';

import { BlogType } from '../../../features/Blogs/blogs-api';
import { ReactComponent as ArrowBottom } from '../../icons/arrowBottom.svg';

import styles from './select.module.css';

type SelectType = {
  options: BlogType[];
  value?: BlogType;
  onChange: (value: any) => void;
};

export const Select: FC<SelectType> = ({ options, onChange, value }) => {
  const selectOption = (option: BlogType): void => {
    onChange(option);
  };

  return (
    <div className={styles.container}>
      <span className={styles.value}>{value?.name}</span>
      <ArrowBottom />
      <ul className={styles.option}>
        {options.map(option => (
          <li
            role="presentation"
            key={option.id}
            className={styles.option}
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
