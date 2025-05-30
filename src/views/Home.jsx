import {useState} from 'react';
import MediaRow from '../components/Mediarow';
import SingleView from '../components/SingleView';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();
  const [selectedItem, setSelectedItem] = useState(null);
  console.log('selectedItem', selectedItem);

  return (
    <>
      <h2 className="my-2 text-2xl">My Media</h2>
      <table>
        <thead>
          <tr className="*:border-2 *:border-[#ccc] *:p-4">
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};
export default Home;
