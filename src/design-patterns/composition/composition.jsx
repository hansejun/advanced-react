export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      {...props}
      style={{
        fontSize: size === 'sm' ? '12px' : '16px',
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = props => {
  return <Button color="red" {...props} />;
};

export const GreenSmallButton = props => {
  return <Button color="green" size="sm" {...props} />;
};
