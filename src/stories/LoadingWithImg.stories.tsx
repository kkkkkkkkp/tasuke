import LoadingWithImg from "../loader/LoadingWithImg/LoadingWithImg";


export default {
  title: 'Loading/With Image',
  component: LoadingWithImg,
};

export const Default = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <LoadingWithImg />
    </div>
  );
  