import { createContext, useContext } from 'react';

const Context = createContext(null);

const Header = ({ children }) => {
  const { test } = useContext(Context);
  return (
    <div>
      {children} {test}
    </div>
  );
};

const Body = ({ children }) => {
  return <section> {children}</section>;
};

const Footer = ({ children }) => {
  return <div> {children}</div>;
};

const Card = ({ children }) => {
  return (
    <Context.Provider value={{ test: 'testValue' }}>
      <article>{children}</article>
    </Context.Provider>
  );
};

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
