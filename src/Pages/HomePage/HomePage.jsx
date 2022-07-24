import style from './HomePage.module.css';
import flag from './Ukraine.jpg';

export const HomePage = () => {
  return <img className={style.flag} src={flag} alt="Флаг" width="500px"></img>;
};
