import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {useAuthentication} from '../hooks/apiHooks';

// src/components/MediaRow.jsx
const MediaRow = (props) => {
  const {isLoggedIn} = useAuthentication();
  const {item, setSelectedItem} = props;
  const handleClick = () => {
    setSelectedItem(item);
  };
  return (
    <tr key={item.media_id} className="*:border-2 *:border-[#ccc] *:p-4">
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-52 object-cover"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        {/*<button onClick={handleClick}>View</button>*/}
        <Link
          to="/single"
          state={{item}}
          className="rounded p-4 transition duration-300 hover:bg-stone-600"
        >
          View
        </Link>
        <button
          className="mt-5 mr-1 rounded p-4 transition duration-300 hover:bg-stone-600"
          onClick={() => {
            console.log('button edit pressed');
          }}
        >
          Edit
        </button>
        <button
          className="rounded p-4 transition duration-300 hover:bg-stone-600"
          onClick={() => {
            console.log('button delete pressed');
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default MediaRow;
