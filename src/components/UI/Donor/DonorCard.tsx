import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";

type UserProfile = {
  bio: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  userId: string;
};

export type TDonor = {
  availability: boolean;
  bloodType: string;
  createdAt: string;
  email: string;
  id: string;
  location: string;
  name: string;
  updatedAt: string;
  userProfile: UserProfile;
};

export default function DonorCard({ donor }: { donor: TDonor }) {
  const { name, location, bloodType, availability, id } = donor;
  return (
    <Card
      sx={{
        bgcolor: "#e1e1e1",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <BloodtypeIcon className="colorRed cardIcon" />
            {bloodType}
          </Typography>

          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <LocationOnIcon className="color-primary cardIcon" />
            {location}
          </Typography>
          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <FiberManualRecordIcon
              className={
                availability ? "colorGreen cardIcon" : "colorRed cardIcon"
              }
            />
            {(availability && "Available") || "Unavailable"}
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
        <Button
          component={Link}
          href={`/donor-details/${id}`}
          className="btnPrimary"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
