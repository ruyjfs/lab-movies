import { useState } from 'react';
import Container from '@material-ui/core/Container';

import Layout from '../components/Layout';
import AppModal from '../components/Modal';
import SectionCard from '../components/SectionCard';

export default function Home({ list }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function handleClick(item) {
    setModalData(item);
    setModalOpen(true);
  }

  return (
    <Layout title="Home">
      <Container maxWidth="xl">
        <SectionCard title="Busca" list={list} onClick={handleClick} />
        <AppModal open={modalOpen} data={modalData} setOpen={setModalOpen} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  let list: any = [];

  if (query?.q) {
    list = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=88887d952c97fa703541b6d8226e0a70&query=${query?.q}&language=pt-BR`
    ).then(async (result) => await result.json());
    list = list.results.filter((value) => value.poster_path);
  }

  return {
    props: {
      list,
    },
  };
}
