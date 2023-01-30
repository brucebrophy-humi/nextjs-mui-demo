import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const reportsToOptions = [
  "Bruce Brophy",
  "John Needham",
  "Tyler Awrey",
  "Zoe Zou",
  "Dac Chartrand",
];

const Forms = () => {
  const [office, setOffice] = useState("");
  const [hireDate, setHireDate] = useState("");

  return (
    <main>
      <Container>
        <Typography variant="h1" style={{ margin: "20px 0 20px" }}>
          Mui Forms
        </Typography>

        <Paper
          elevation={6}
          style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
        >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={6}>
              <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Office</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={office}
                  label="Office"
                  onChange={(e) => setOffice(e.target.value)}
                >
                  <MenuItem value={20}>Home Office</MenuItem>
                  <MenuItem value={10}>Humi Office</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <DatePicker
                label="Hire Date"
                value={hireDate}
                onChange={(newValue) => {
                  setHireDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth error={false} />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Additional Terms"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                fullWidth
                options={reportsToOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Reports To" />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  );
};

export default Forms;
