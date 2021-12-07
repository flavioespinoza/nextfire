import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Loader from '../components/Loader';

function Home() {
  return (
    <div className='container'>
      <Loader show />
      <h1>Home</h1>
      <Link
        prefetch={false}
        href={{
          pathname: '/[username]',
          query: { username: 'flavio' },
        }}
      >
        <a>Flavio's profile</a>
      </Link>
    </div>
  );
}
export default Home;
