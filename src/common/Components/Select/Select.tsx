import React, { FC, useState } from 'react';

import { BlogType } from '../../../features/Blogs/blogs-api';

type SelectType = {
  blogs: BlogType[];
  onChange: (value: any) => void;
  value: string;
};

export const Select: FC<SelectType> = ({ blogs, onChange, value }) => {
  const [active, setActive] = useState(false);

  const setActiveHandler = (): void => {
    setActive(!active);
  };

  const setValue = (name: string): void => {
    onChange(name);
  };

  return (
    <div onChange={onChange}>
      <div role="presentation" onClick={setActiveHandler}>
        {value}
      </div>
      {active &&
        blogs.map(el => {
          return (
            <div key={el.id}>
              <span role="presentation" onClick={() => setValue(el.name)}>
                {el.name}
              </span>
            </div>
          );
        })}
    </div>
  );
};
