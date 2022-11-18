import React, { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { DeleteBlogs } from '../../../common/Components/Modals/DeleteBlogs/DeleteBlogs';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import deleteSvg from '../../../common/icons/Delete.svg';
import editSvg from '../../../common/icons/Edit.svg';
import settingsSvg from '../../../common/icons/Settings.svg';
import style from '../../../layout/global.module.css';
import { deleteBlog } from '../blogs-actions';

import styles from './Settings.module.css';

type SettingType = {
  id: string;
};

export const Settings: FC<SettingType> = ({ id }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useAppDispatch();

  const showSettingsHandler = (): void => {
    setShowSettings(!showSettings);
  };

  const openDeleteModeHandler = (): void => {
    setOpenDeleteModal(true);
  };

  const deleteBlogHandler = (): any => {
    dispatch(deleteBlog(id));
  };

  return (
    <div className={styles.settingBlock}>
      <div
        className={styles.settingsBlock}
        role="presentation"
        onClick={showSettingsHandler}
      >
        <img src={settingsSvg} alt="settings" />
        {showSettings && (
          <ul className={styles.settings}>
            <li role="presentation" onClick={openDeleteModeHandler}>
              <img src={deleteSvg} alt="delete" />
              <NavLink to="">Delete</NavLink>
            </li>
            <li>
              <img src={editSvg} alt="edit" />
              <NavLink to="" className={style.titleName}>
                Edit
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className={styles.deleteModalBlock}>
        {openDeleteModal && (
          <div className={style.deleteModal}>
            <DeleteBlogs
              setOpenDeleteModal={setOpenDeleteModal}
              deleteBlog={deleteBlogHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};
