import React, { ReactNode } from 'react';
import { useStyle } from './useStyle';

interface Props {
  descContent: string;
  FormTextField: ReactNode;
}

export const FormTextBlock = ({ FormTextField, descContent }: Props) => {
  const styles = useStyle();

  return (
    <div className={styles.formTextBlok}>
      <p className={styles.textBlockDescription}>
        {descContent}
      </p>
      {FormTextField}
    </div>
  )
}