import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useStyle } from './useStyle';

export const CustomAppBar = () => {
  const styles = useStyle();
  return (
    <div className={styles.headerWrapper}>
      <AppBar className={styles.headerAppBar} position='static'>
        <Toolbar>
          <Button className={styles.headerButton} component={Link} to='/' >Home</Button>
          <Button className={styles.headerButton} component={Link} to='/questionnaire'>Questionnaire</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}