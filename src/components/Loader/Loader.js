import { InfinitySpin } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWraper>
      <InfinitySpin
  visible={true}
  width="200"
  color="#DC143C"
  ariaLabel="infinity-spin-loading"
  />
    </LoaderWraper>
  );
};