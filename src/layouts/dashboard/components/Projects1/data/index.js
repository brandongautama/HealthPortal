/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "脈象", accessor: "companies", width: "25%", align: "left" },
      { Header: "Probability (%)", accessor: "budget", align: "center" },
      { Header: "Probability", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company name="弦脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            32
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={32} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="杵脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            41
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={41} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="革脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={1} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="牢脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            0
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={0} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="濡脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            12
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={12} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="弱脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            12
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={12} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="散脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={30} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="細脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            22
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={22} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="伏脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            12
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={12} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="動脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            14
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={14} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="促脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={6} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="結脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={6} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="代脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={6} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="大脈" />,

        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        completion: (
          <MDBox width="20rem" textAlign="left">
            <MDProgress value={6} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
