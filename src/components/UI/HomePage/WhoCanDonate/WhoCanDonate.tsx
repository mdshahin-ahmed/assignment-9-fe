import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const WhoCanDonate = () => {
  return (
    <Container>
      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Who Can Donate" />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          Blood donation is a vital process that helps save lives. However, not
          everyone is eligible to donate blood due to various health and safety
          reasons. Here is a detailed guide on who can donate blood, covering
          all the essential aspects to ensure donors meet the necessary criteria
          and the donated blood is safe for recipients.
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            General Eligibility Requirements
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h3" gutterBottom>
                Age
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Minimum Age:
                        </Typography>
                        Most blood donation centers require donors to be at
                        least 17 years old (16 in some states with parental
                        consent).
                      </>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Maximum Age:
                        </Typography>
                        There is no upper age limit for blood donation as long
                        as the donor is in good health.
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h3" gutterBottom>
                Weight
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          Minimum Weight:
                        </Typography>
                        Donors must weigh at least 110 pounds (50 kg) to ensure
                        safe blood donation.
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Typography variant="h6" component="h3" gutterBottom>
              Health Status
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Donors should be in good general health and feel well on the day of donation." />
              </ListItem>
              <ListItem>
                <ListItemText primary="They must pass a basic physical examination which includes checking temperature, pulse, blood pressure, and hemoglobin levels." />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default WhoCanDonate;
