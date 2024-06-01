import EmailIcon from "@mui/icons-material/Email";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MyBloodRequestCard({
  bloodRequest,
}: {
  bloodRequest: any;
}) {
  const { requestStatus, donor } = bloodRequest;
  return (
    <Card
      sx={{
        bgcolor: "#e1e1e1",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {donor.name}
          </Typography>
          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <BloodtypeIcon className="colorRed cardIcon" />
            {donor.bloodType}
          </Typography>

          <Typography
            variant="body1"
            className="cardTypography"
            color="text.secondary"
          >
            <FiberManualRecordIcon
              className={`${
                requestStatus === "PENDING" ? "colorYellow cardIcon" : ""
              }
             ${requestStatus === "APPROVED" ? "colorGreen cardIcon" : ""}
             ${requestStatus === "REJECTED" ? "colorRed cardIcon" : ""}`}
            />
            {requestStatus}
          </Typography>
          {requestStatus === "APPROVED" && (
            <Typography
              variant="body1"
              className="cardTypography"
              color="text.secondary"
            >
              <EmailIcon className="color-primary cardIcon" />
              {donor.email}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
