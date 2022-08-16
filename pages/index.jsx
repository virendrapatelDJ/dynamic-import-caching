import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [data, setData] = useState([]);
  const [dataPublic, setDataPublic] = useState([]);

  const importNowFromJson = async (id) => {
    setData((await import(`../json/products${id}.json`)).default);
  };
  const importNowFromJsonPublic = async (id) => {
    setDataPublic((await import(`../public/json/products${id}.json`)).default);
  };
  return (
    <Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        />
      </Head>

      <div className="row">
        <div className="col">
          <div className={styles.container}>
            <br />
            <br />
            <br />
            <button onClick={() => importNowFromJson(1)}>Import Now 1 </button>
            <button onClick={() => importNowFromJson(2)}>Import Now 2 </button>
            <button onClick={() => importNowFromJson(3)}>Import Now 3</button>
            <button onClick={() => importNowFromJson(4)}>Import Now 4</button>
            <button onClick={() => importNowFromJson(5)}>Import Now 5</button>

            <h1>Dynamic Import DEMO From SRC</h1>

            <hr />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
        <div className="col">
          <div className={styles.container}>
            <br />
            <br />
            <br />
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

            <h1>Dynamic Import DEMO From Public</h1>

            <hr />
            <pre>{JSON.stringify(dataPublic, null, 2)}</pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
