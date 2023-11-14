
import LoadingArcCircle from '../loader/LoadingArcCircle/LoadingArcCircle';

export default {
  title: 'Loading/Arc Circle',
  component: LoadingArcCircle,
};

export const Default = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingArcCircle />
  </div>
);
