import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home({}) {
  return (
    <main>
      <Loader show={false} />
        <h1>Home</h1>
        <button onClick={() => toast.success('hello toast!')}>
          Toast Me
        </button>
    </main>
  );
}
