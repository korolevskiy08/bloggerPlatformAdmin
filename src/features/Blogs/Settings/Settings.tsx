import React, { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { DeleteBlogs } from '../../../common/Components/Modals/DeleteBlogs/DeleteBlogs';
import deleteSvg from '../../../common/icons/Delete.svg';
import editSvg from '../../../common/icons/Edit.svg';
import settingsSvg from '../../../common/icons/Settings.svg';
import style from '../../../layout/global.module.css';

import styles from './Settings.module.css';

type SettingType = {
  textModals: string;
  titleModals: string;
  deleteItemHandler: () => void;
  navigateEditBlog?: () => void;
};

export const Settings: FC<SettingType> = ({
  titleModals,
  textModals,
  deleteItemHandler,
  navigateEditBlog,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const showSettingsHandler = (): void => {
    setShowSettings(!showSettings);
  };

  const openDeleteModeHandler = (): void => {
    setOpenDeleteModal(true);
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
              <button type="button" onClick={navigateEditBlog}>
                Edit
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className={styles.deleteModalBlock}>
        {openDeleteModal && (
          <div className={style.deleteModal}>
            <DeleteBlogs
              textModals={textModals}
              titleModals={titleModals}
              setOpenDeleteModal={setOpenDeleteModal}
              deleteItem={deleteItemHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};
