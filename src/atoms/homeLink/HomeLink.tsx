import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle } from './useStyle';

export interface Props {
  path: string;
  content: string;
}

export const HomeLink = (props: Props) => {
  const styles = useStyle();
  return (
    <Link className={styles.homeLink} to={props.path}>
      {props.content}
    </Link>
  )
}