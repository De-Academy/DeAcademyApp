import React, { ChangeEvent, DragEvent, useRef } from 'react';
import icon from '../../../../assets/file-upload-icon.png'


interface UploadButtonProps {
  onVideoSelect: (file: File) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onVideoSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      onVideoSelect(selectedFile);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const fileList = event.dataTransfer.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      onVideoSelect(selectedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ cursor: 'pointer' }}
    >
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoSelect}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <img src={icon.src} alt="Upload Video" width={50} height={50} />
    </div>
  );
};

export default UploadButton;
