import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as Blog } from '../../common/icons/Blogs.svg';
import { ReactComponent as Post } from '../../common/icons/Posts.svg';
import { ReactComponent as Users } from '../../common/icons/Users.svg';
import { Path } from '../../common/Routes';
import style from '../global.module.css';

import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  return (
    <div className={styles.navBlock}>
      <ul className={styles.nav}>
        <li className={`${styles.activeList} ${styles.activeLink}`}>
          <NavLink to={Path.Blogs}>
            <Blog />
            <span className={`${style.text} ${styles.link}`}>Blogs</span>
          </NavLink>
        </li>
        <li className={`${styles.activeList} ${styles.activeLink}`}>
          <NavLink to={Path.Posts}>
            <Post />
            <span className={`${style.text} ${styles.link}`}>Posts</span>
          </NavLink>
        </li>
        <li className={`${styles.activeList} ${styles.activeLink}`}>
          <NavLink to={Path.Users}>
            <Users />
            <span className={`${style.text} ${styles.link}`}>Users</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
