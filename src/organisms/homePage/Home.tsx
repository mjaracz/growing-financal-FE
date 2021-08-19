import React from 'react';
import { HomeMain } from 'molecules/homeMain';
import { CustomAppBar } from 'molecules/headerAppBar';
import { useStyle } from './useStyle'

export function HomePage() {
  const styles = useStyle();

  return (
    <div className={styles.home}>
      <CustomAppBar />
      <HomeMain />
    </div>
  )
}