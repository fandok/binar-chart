import { Line } from "react-chartjs-2";

const LineComponent = () => {
  return (
    <div style={{ width: 1000, height: 800 }}>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "My First Dataset",
              backgroundColor: "rgb(255,99,132)",
              borderColor: "rgb(255,99,132)",
              data: [0, 10, 5, 2, 20, 30],
            },
          ],
        }}
      />
    </div>
  );
};

export default LineComponent;
