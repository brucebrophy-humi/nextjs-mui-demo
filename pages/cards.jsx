import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";

const names = [
  "Hector A. Primus",
  "Erik Conley",
  "Jeremy Mills",
  "Timothy Reynolds",
  "Kathleen Guy",
  "Maryann Martinez",
  "Arlene Townsend",
  "Bethany Beaudoin",
];

const EmployeeCard = ({ name }) => {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        src={`https://100k-faces.glitch.me/random-image?seed=${name}`}
        height="300"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Engineering
        </Typography>

        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

const LoadingCard = () => {
  return (
    <Card variant="outlined">
      <Skeleton variant="rectangular" height={300} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </CardContent>
      <CardActions>
        <Skeleton variant="text" width={200} height={40} />
      </CardActions>
    </Card>
  );
};

const Cards = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setShowLoading(false), 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <main>
      <Container sx={{ marginTop: "16px" }}>
        <Grid container spacing={2} rowSpacing={2}>
          {names.map((name) => (
            <Grid item xs={12} md={6} lg={3} key={name}>
              {showLoading ? <LoadingCard /> : <EmployeeCard name={name} />}
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Cards;
