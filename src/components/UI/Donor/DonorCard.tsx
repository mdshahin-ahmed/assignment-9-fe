import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function DonorCard() {
  return (
    <Card
      sx={{
        bgcolor: "#e1e1e1",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shahin Ahmed
          </Typography>
          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <BloodtypeIcon className="colorRed cardIcon" />
            O_Positive
          </Typography>

          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <LocationOnIcon className="color-primary cardIcon" />
            Location
          </Typography>
          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <FiberManualRecordIcon
              className={true ? "colorGreen cardIcon" : "colorRed cardIcon"}
            />
            Available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "15px 0px",
        }}
      >
        <Button className="btn-primary">Details</Button>
      </CardActions>
    </Card>
  );
}
