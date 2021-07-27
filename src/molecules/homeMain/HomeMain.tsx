import React from 'react';
import { HomeLink } from 'atoms/homeLink';
import { useStyle } from './useStyle';

export const HomeMain = () => {
  const styles = useStyle();
  return (
    <main className={styles.homeMain}>
      <div className={styles.mainTextBlock} />
      <HomeLink path='/questionnaire' content='Go to questionnaire' />
    </main>
  )
}