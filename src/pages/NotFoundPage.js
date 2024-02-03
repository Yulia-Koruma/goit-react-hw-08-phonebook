import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry! The link you followed no longer exists. Please use this{' '}
      <Link to="/">link</Link> to navigate to our home page
    </div>
  );
}