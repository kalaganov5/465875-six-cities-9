import {Link} from 'react-router-dom';
import {AppRoute} from 'const';

function NotFound ():JSX.Element {
  return (<p>404 Not Found :( <br/><Link to={AppRoute.Root}>Go to the homepage</Link></p>);
}

export default NotFound;
