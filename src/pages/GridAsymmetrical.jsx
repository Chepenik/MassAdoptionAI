import { Grid, Container, Image } from '@mantine/core';

const images = [
  'https://cdn.nostr.build/p/nb3961.jpeg',
  'https://cdn.nostr.build/p/nb3621.jpeg',
  'https://cdn.nostr.build/p/nb2534.jpeg',
];

export function GridOfImages() {
  return (
    <Container my="md">
      <Grid>
        {images.map(img => (
          <Grid.Col key={img} xs={4}>
            <Image src={img} alt="Image" />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default GridOfImages;