import React from 'react';
import { HomeMain } from 'molecules/homeMain';
import { HomeHeader } from 'molecules/homeHeader';
import { CustomAppBar } from 'molecules/customAppBar';
import { useStyle } from './useStyle'

export function HomePage() {
  const styles = useStyle();

  return (
    <div className={styles.home}>
      <CustomAppBar />
      <HomeHeader />
      <HomeMain />
    </div>
  )
}