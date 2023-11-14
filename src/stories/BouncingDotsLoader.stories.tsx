
import BouncingDotsLoader from '../loader/BouncingDotsLoader/BouncingDotsLoader';

export default {
  title: 'Loading/Bouncing Dots',
  component: BouncingDotsLoader,
};

export const Default = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BouncingDotsLoader />
    </div>
);
  