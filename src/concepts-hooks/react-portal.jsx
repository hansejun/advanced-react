import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const PortalComponent = () => {
  const [onOpen, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Alert show={onOpen} onClose={() => setOpen(false)}>
        <h1>Alert</h1>
        <p>You are reading this alert</p>
      </Alert>
    </div>
  );
};

export default PortalComponent;

const Alert = ({ children, onClose, show }) => {
  if (!show) return null;
  return createPortal(<div onClick={onClose}>{children}</div>, document.body);
};
