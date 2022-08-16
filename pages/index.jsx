import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [data, setData] = useState([]);
  const [path, setPath] = useState('');
  const [pathPublic, setPathPublic] = useState('');
  const [dataPublic, setDataPublic] = useState([]);

  const importNowFromJson = async (id) => {
    const path = `../json/products${id}.json`
    setPath(path)
    setData((await import(`../json/products${id}.json`)).default);
  };
  const importNowFromJsonPublic = async (id) => {
    const path = `../public/json/products${id}.json`
    setPathPublic(path)
    setDataPublic((await import(`../public/json/products${id}.json`)).default);
  };
  return (
    <Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <br />
      <div className="row container-fluid">
        <div className="col border rounded m-1">
          <h4 className="text-center alert alert-info">
            Dynamic Import DEMO From root/json/files...
          </h4>
          <hr />
          <div className={styles.container}>
            <button onClick={() => importNowFromJson(1)}>Import Now 1 </button>
            <button onClick={() => importNowFromJson(2)}>Import Now 2 </button>
            <button onClick={() => importNowFromJson(3)}>Import Now 3</button>
            <button onClick={() => importNowFromJson(4)}>Import Now 4</button>
            <button onClick={() => importNowFromJson(5)}>Import Now 5</button>

            <hr />
            <h4>Path : {path}</h4>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
        <div className="col border rounded m-1">
          <h4 className="text-center alert alert-info">
            Dynamic Import DEMO From public/json/files...
          </h4>
          <hr />
          <div className={styles.container}>
            <button onClick={() => importNowFromJsonPublic(1)}>
              Import Now 1{' '}
            </button>
            <button onClick={() => importNowFromJsonPublic(2)}>
              Import Now 2{' '}
            </button>
            <button onClick={() => importNowFromJsonPublic(3)}>
              Import Now 3
            </button>
            <button onClick={() => importNowFromJsonPublic(4)}>
              Import Now 4
            </button>
            <button onClick={() => importNowFromJsonPublic(5)}>
              Import Now 5
            </button>

            <hr />
            <h4>Path : {pathPublic}</h4>

            <pre>{JSON.stringify(dataPublic, null, 2)}</pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
