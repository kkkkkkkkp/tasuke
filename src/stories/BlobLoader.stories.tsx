
import BlobLoader from '../loader/BlobLoader/BlobLoader';

export default {
  title: 'Loading/Blob',
  component: BlobLoader,
};

export const Default = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BlobLoader />
    </div>
);
  