import {
  RiseOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  // useDocumentTitle('Welcome | Admin Dashboard');
  // useScrollTop();
  const data = [
    { name: "17", uv: 400, pv: 200, amt: 2400 },
    { name: "18", uv: 100, pv: 300, amt: 2400 },
    { name: "19", uv: 240, pv: 400, amt: 2400 },
    { name: "20", uv: 454, pv: 540, amt: 2400 },
    { name: "21", uv: 440, pv: 242, amt: 2400 },
    { name: "22", uv: 540, pv: 180, amt: 2400 },
  ];
  return (
    <div className="admin-dashboard">
      <div className="statistics d-flex-col">
        <div className="header d-flex">
          <h2>Statistics</h2>
          <div className="flex-spacer"></div>
          <span>Updated 2 hrs ago</span>
        </div>
        <div className="d-flex">
          <div className="stats-wrapper d-flex">
            <div className="stats-icon d-flex-center purple">
              <RiseOutlined className="icon" />
            </div>
            <div className="stats">
              <p>8.4k</p>
              <p>Sales</p>
            </div>
          </div>

          <div className="stats-wrapper d-flex">
            <div className="stats-icon d-flex-center sky-blue">
              <UserOutlined className="icon" />
            </div>
            <div className="stats">
              <p>8.4k</p>
              <p>Customers</p>
            </div>
          </div>
          <div className="stats-wrapper d-flex">
            <div className="stats-icon d-flex-center red">
              <CodeSandboxOutlined className="icon" />
            </div>
            <div className="stats">
              <p>201</p>
              <p>Products</p>
            </div>
          </div>
          <div className="stats-wrapper d-flex">
            <div className="stats-icon d-flex-center green">
              <DollarCircleOutlined className="icon" />
            </div>
            <div className="stats">
              <p>$8.4k</p>
              <p>Revenue</p>
            </div>
          </div>
        </div>
      </div>

      <div className="visits">
        <h2>Website visits</h2>
        <LineChart
          width={400}
          height={240}
          data={data}
          className="visits-chart"
          // margin={{ top: 16, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
