
import LoadingFiveCircle from '../loader/LoadingFiveCircle/LoadingFiveCircle';

export default {
  title: 'Loading/Five Circle',
  component: LoadingFiveCircle,
};

export const Default = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingFiveCircle />
  </div>
);
