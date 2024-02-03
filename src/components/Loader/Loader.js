import { Circles } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWraper>
      <Circles
        height="150"
        width="150"
        color="#0390fc"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWraper>
  );
};