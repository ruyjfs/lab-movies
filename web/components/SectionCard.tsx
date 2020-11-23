import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { API_IMAGE_URL } from '../constants/api';

export default function Section({ title, list, onClick }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid container spacing={1}>
        {list?.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={2}>
            <Card onClick={() => onClick(item)}>
              {item.poster_path && (
                <ImageCustom
                  src={`${API_IMAGE_URL}/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              )}
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const Title = styled.h1``;
const CardTitle = styled.div`
  padding: 5px;
  flex: 1;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
`;
const ImageCustom = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;
const Container = styled.div`
  color: #fff;
`;
const List = styled.section`
  flex: 1;
  flex-direction: row;
`;
const Card = styled.div`
  background-color: #00000090;

  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    transform: translate3D(0, 0, 0) scale(1.23);
    box-shadow: 8px 28px 50px rgba(2, 4, 5, 0.07),
      1px 6px 12px rgba(39, 44, 49, 0.04);
  }
`;
