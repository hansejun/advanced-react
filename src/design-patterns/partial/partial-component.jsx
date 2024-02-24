export const PartialComponent = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />;
  };
};

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

const RedButton = PartialComponent(Button, { color: 'red' });

const GreenSmallButton = PartialComponent(Button, {
  color: 'green',
  size: 'sm',
});

const AppContainer = () => {
  return (
    <div>
      <RedButton text="Red Button" />
      <GreenSmallButton text="Green Small Button" />
    </div>
  );
};
