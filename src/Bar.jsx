import { Bar } from "react-chartjs-2";

const BarComponent = () => {
  return (
    <div style={{ width: 1154, height: 376 }}>
      <Bar
        options={{
          plugins: {
            legend: {
              // hilangin label di atas bar
              display: false,
            },
          },
          scales: {
            y: {
              title: {
                display: true,
                // munculin teks di kiri bar
                text: "Amount of Car Rented",
              },
            },
            x: {
              title: {
                display: true,
                // munculin teks di bawah bar
                text: "Date",
              },
            },
          },
        }}
        data={{
          // untuk generate angka 1 sampai 30
          labels: Array.from({ length: 30 }, (_, i) => i + 1),
          datasets: [
            {
              // untuk generate 30 angka random dengan nilai maks 120
              data: Array.from({ length: 30 }, () =>
                Math.floor(Math.random() * 120),
              ),
            },
          ],
        }}
      />
    </div>
  );
};

export default BarComponent;
