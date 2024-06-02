import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import aboutImage from "@/assets/about.jpg";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";

const AboutPage = () => {
  return (
    <Container
      sx={{
        marginTop: "50px",
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={aboutImage} alt="Hero" />
      </Box>
      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Mission Statement" />
      </Box>
      <Typography>
        At Blood, we believe in the power of community and the profound impact
        that one act of kindness can have on many lives. Our mission is to save
        lives by making the process of blood donation seamless, accessible, and
        rewarding. We strive to build a comprehensive platform that connects
        willing donors with those in need, ensuring that blood banks are always
        stocked and ready for emergencies. By fostering a community of regular
        donors, we aim to create a supportive network that can respond swiftly
        to critical situations, ultimately saving lives and improving health
        outcomes worldwide.
      </Typography>
      <Typography mt={2}>
        Our commitment goes beyond just facilitating blood donations. We are
        dedicated to raising awareness about the importance of regular blood
        donation, educating the public on the safety and benefits of donating
        blood, and debunking common myths and misconceptions. Through our
        platform, we aim to make the donation process as straightforward and
        transparent as possible, providing users with all the information and
        support they need to become regular donors.
      </Typography>
      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Team Information" />
      </Box>
      <Typography>
        Behind Blood is a team of passionate individuals who are united by a
        common goal: to make a difference in the world through blood donation.
        Our team combines expertise from various fields, including healthcare,
        technology, and community outreach, to ensure that our platform is both
        effective and user-friendly. Our dedicated team is passionate about
        saving lives and improving health outcomes through blood donation.
        Comprising healthcare professionals, software developers, and community
        outreach specialists, we work tirelessly to streamline the donation
        process and provide a seamless experience for donors and recipients
        alike
      </Typography>
      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Contact Information" />
      </Box>

      <Typography
        variant="body1"
        className="cardTypography"
        color="text.secondary"
      >
        <EmailIcon className="color-primary cardIcon" />
        blood@yopmail.com
      </Typography>
      <Typography
        variant="body1"
        className="cardTypography"
        color="text.secondary"
        mt={2}
      >
        <LocalPhoneIcon className="color-primary cardIcon" />
        0123456789
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: 3,
        }}
      >
        <Box mr={3} component={Link} href={"https://www.facebook.com/"}>
          <Image width={50} height={50} src={facebook} alt="facebook" />
        </Box>
        <Box mr={3} component={Link} href={"https://www.facebook.com/"}>
          <Image width={50} height={50} src={instagram} alt="instagram" />
        </Box>
        <Box mr={3} component={Link} href={"https://www.facebook.com/"}>
          <Image width={50} height={50} src={linkedin} alt="linkedin" />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
