import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { API_IMAGE_URL } from '../constants/api';

interface Params {
  open: boolean;
  setOpen: any;
  data: any;
}

export default function TransitionsModal({ open, setOpen, data = {} }: Params) {
  return (
    <ModalCustom
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container>
          <Image
            src={`${API_IMAGE_URL}/t/p/w500${data?.backdrop_path}`}
            alt={data?.title}
          />
          <Content>
            <h2 id="transition-modal-title">
              {data?.title} ({data?.original_title})
            </h2>
            <p>Lançamento: {dayjs(data.release_date).format('DD/MM/YYYY')}</p>
            <p id="transition-modal-description"> {data?.overview}</p>
          </Content>
        </Container>
      </Fade>
    </ModalCustom>
  );
}

const Container = styled.div`
  width: 500px;
  min-height: 300px;
  background-color: #000000;
  border-radius: 10px;
`;

const Content = styled.div`
  color: #fff;
  margin: 10px;
`;

const ModalCustom = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
`;
