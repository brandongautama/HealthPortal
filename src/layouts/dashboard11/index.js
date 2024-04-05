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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard11/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard11/components/Projects";
import Projects1 from "layouts/dashboard11/components/Projects1";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks, sales1, sales2 } = reportsLineChartData;

  return (
    <DashboardLayout>
      <MDBox py={0}>
        <Grid item xs={4} md={6} lg={8}>
          <MDBox mt={0.5}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6} lg={12}>
                <MDBox mb={0}>
                  <ReportsLineChart
                    color="success"
                    title="寸波形"
                    // description={
                    //   <>
                    //     (<strong>+15%</strong>) avg heart rate increased.
                    //   </>
                    // }
                    date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
              {/* <Grid item xs={12} md={6} lg={4}>
              <Grid style={{ height: "100%" }}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="This week's avg heart rate"
                    // description="Daily avg heart rate"
                    date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
            </Grid> */}
            </Grid>
          </MDBox>
          <MDBox mt={0.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={12}>
                <MDBox mb={0}>
                  <ReportsLineChart
                    color="success"
                    title="關波形"
                    // description={
                    //   <>
                    //     (<strong>+15%</strong>) avg heart rate increased.
                    //   </>
                    // }
                    date="updated 4 min ago"
                    chart={sales1}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={0.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={12}>
                <MDBox mb={2}>
                  <ReportsLineChart
                    color="success"
                    title="尺波形"
                    // description={
                    //   <>
                    //     (<strong>+15%</strong>) avg heart rate increased.
                    //   </>
                    // }
                    date="updated 4 min ago"
                    chart={sales2}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Projects1 />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
