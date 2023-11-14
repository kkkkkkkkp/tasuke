
import LoadingText from '../loader/LoadingText/LoadingText';

export default {
  title: 'Loading/Text',
  component: LoadingText,
};

export const Default = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingText />
    </div>
  );
  