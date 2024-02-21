import { Container } from "@mui/material";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import { columns, rowData } from "../services/api";

const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card title={"Total Accounts"} text={"20"} />
        <Card title={"Total EA's"} text={"20"} />
        <Card title={"Highest Profit"} text={"$200"} />
      </div>
      <Table rowData={rowData} columns={columns} />
    </Container>
  );
};

export default Homepage;
