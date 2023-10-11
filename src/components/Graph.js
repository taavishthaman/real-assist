import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledGraphTitle = styled.div`
  height: 2.4rem;
  border-radius: 1.2rem 1.2rem 0 0;
  background-color: #e8eefb;
  display: flex;
  align-items: center;
  color: #1463ff;
  font-family: "Poppins";
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  padding-left: 1.28rem;
`;

const StyledGraphContainer = styled.div`
  height: 17.5rem;
  width: 100%;
  overflow: hidden;
  background-color: #f2f4f5;
  border-radius: 0 0 1.2rem 1.2rem;
  position: relative;
`;

const GraphTitle = styled.div`
  color: #1e1e1e;
  font-family: "Poppins";
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  transform: rotate(-90deg) translate(50%, -50%);
  position: absolute;
  top: 50%;
  left: 0;
`;

const StyledGraphCard = styled.div`
  margin: 1.2rem 2.2rem;
  background-color: #fff;
  height: 15.1rem;
  width: calc(865px - 4.4rem);
  border-radius: 1.23rem;
`;

const StyledGraph = styled.div``;

function Graph({ crimes }) {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <StyledGraphTitle>Burglary</StyledGraphTitle>
      <StyledGraphContainer>
        <GraphTitle>Arrests</GraphTitle>
        <StyledGraphCard>
          <StyledGraph>
            <LineChart
              width={895 - 100}
              height={151}
              data={crimes}
              margin={{
                top: 14,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid
                vertical={false}
                horizontal={true}
                stroke="#BAC2DB"
              />
              <XAxis
                dataKey="data_year"
                tickLine={false}
                axisLine={{ stroke: "#BAC2DB" }}
                tick={{
                  fontFamily: "Poppins",
                  fill: "#626E99",
                  fontSize: "9.258px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "12.344px",
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={{ stroke: "#BAC2DB" }}
                tick={{
                  fontFamily: "Poppins",
                  fill: "#626E99",
                  fontSize: "9.258px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "12.344px",
                }}
              />
              <Tooltip />
              <Line
                type="line"
                dataKey="Burglary"
                stroke="#1463FF"
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
                strokeWidth={1.54}
                isAnimationActive={false}
              />
            </LineChart>
          </StyledGraph>
        </StyledGraphCard>
      </StyledGraphContainer>
      ;
    </>
  );
}

export default Graph;
