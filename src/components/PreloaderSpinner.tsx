import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const PreloaderSpinner: React.FC<Props> = (props) => {
  const className = props.className ? ' ' + props.className : '';

  return (
    <div className={"spinner-border" + className} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default PreloaderSpinner;
