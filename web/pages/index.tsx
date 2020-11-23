import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import Layout from '../components/Layout';
import AppModal from '../components/Modal';

import SectionCard from '../components/SectionCard';
import { API_URL, API_KEY, API_LANGUAGE_PT_BR } from '../constants/api';

export default function Home({ listDiscover, listTrending, listGenres }) {
  const [listByGenres, setListByGenres] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    listGenres.genres.map((genre) => {
      genre.list = listDiscover.results.filter(
        (value) => value.genre_ids.indexOf(genre.id) !== -1
      );
      return genre;
    });

    setListByGenres(listGenres.genres);
  }, [listDiscover, listGenres]);

  function handleClick(item) {
    setModalData(item);
    setModalOpen(true);
  }

  return (
    <Layout title="Home">
      <Container maxWidth="xl">
        <SectionCard
          title="Lançamentos"
          list={listTrending?.results}
          onClick={handleClick}
        />
        {listByGenres?.map((item) => (
          <SectionCard
            key={item.id}
            title={item.name}
            list={item?.list}
            onClick={handleClick}
          />
        ))}
        <AppModal open={modalOpen} data={modalData} setOpen={setModalOpen} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const listGenres = await fetch(
    `${API_URL}genre/movie/list?api_key=${API_KEY}&language=${API_LANGUAGE_PT_BR}`
  ).then(async (result) => await result.json());

  const listDiscover = await fetch(
    `${API_URL}discover/movie?api_key=${API_KEY}&language=${API_LANGUAGE_PT_BR}&sort_by=popularity.desc`
  ).then((result) => result.json());

  const listTrending = await fetch(
    `${API_URL}trending/movie/week?api_key=${API_KEY}&language=${API_LANGUAGE_PT_BR}`
  ).then((result) => result.json());

  return {
    props: {
      listDiscover,
      listTrending,
      listGenres,
    },
  };
}
