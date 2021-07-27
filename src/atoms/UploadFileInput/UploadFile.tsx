import React, { ChangeEvent } from 'react';
import { useStyle } from './useStyle';


export interface Props {
  handleUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
  hintText: string;
  fileName: string;
}

export function UploadFile({ hintText, fileName, handleUploadFile }: Props) {
  const styles = useStyle();

  const renderHintText = () => {
    if (hintText) {
      return (
        <p className={styles.uploadHintText}>
          {hintText}
        </p>
      )
    }
    if (fileName) {
      return (
        <p className={styles.uploadHintText}>
          {`File has been successfully uploaded, file name: ${fileName}`}
        </p>
      )
    }
  }

  return (
    <div className={styles.uploadWrapper}>
      <input className={styles.uploadFileInput} onChange={handleUploadFile} type="file" id="file" />
      <label className={styles.uploadLabel} htmlFor="file">Select file</label>
      {renderHintText()}
    </div>
  )
}