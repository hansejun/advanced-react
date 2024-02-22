const ControlledModal = ({ children, onClose, isShow }) => {
  if (!isShow) return null;
  return (
    <div
      className="absolute left:0 top:0 overflow-auto bg-[rgba(0,0,0,0.4)] w-full h-full"
      onClick={onClose}
    >
      <div
        className="mx-auto mt-[12%] p-6 bg-white rounded-md w-1/2"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}>Hide Modal</button>
        {children}
      </div>
    </div>
  );
};

export default ControlledModal;
