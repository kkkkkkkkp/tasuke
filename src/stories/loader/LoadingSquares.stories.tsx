
import LoadingSquares from '../../loader/LoadingSquares/LoadingSquares';

export default {
  title: 'Loading/Squres',
  component: LoadingSquares,
};

export const Default = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingSquares />
    </div>
  );
  