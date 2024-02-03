import { Warning, ErrorWraper } from './Error.styled';

export const Error = ({ children }) => {
  return (
    <ErrorWraper>
      <Warning>{children}</Warning>
    </ErrorWraper>
  );
};