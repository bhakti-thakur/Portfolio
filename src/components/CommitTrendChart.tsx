import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CommitTrendChartProps {
  labels: string[];
  counts: number[];
}

const CommitTrendChart: React.FC<CommitTrendChartProps> = ({
  labels,
  counts,
}) => {
  if (!labels.length || !counts.length) {
    return null;
  }

  // Get CSS variables for colors
  const getPrimaryColor = () => {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue("--primary").trim();
  };

  const getAccentColor = () => {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue("--accent").trim();
  };

  const primaryHSL = getPrimaryColor() || "300 50% 30%";
  const accentHSL = getAccentColor() || "207 90% 54%";

  // Convert HSL string "300 50% 30%" to rgba
  const hslToRgba = (hsl: string, alpha: number = 1) => {
    const [h, s, l] = hsl.split(" ").map((v) => parseFloat(v));
    const hNorm = h / 360;
    const sNorm = s / 100;
    const lNorm = l / 100;

    const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
    const x = c * (1 - Math.abs(((hNorm * 6) % 2) - 1));
    const m = lNorm - c / 2;

    let r: number, g: number, b: number;

    if (hNorm < 1 / 6) [r, g, b] = [c, x, 0];
    else if (hNorm < 2 / 6) [r, g, b] = [x, c, 0];
    else if (hNorm < 3 / 6) [r, g, b] = [0, c, x];
    else if (hNorm < 4 / 6) [r, g, b] = [0, x, c];
    else if (hNorm < 5 / 6) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    const rDec = Math.round((r + m) * 255);
    const gDec = Math.round((g + m) * 255);
    const bDec = Math.round((b + m) * 255);

    return `rgba(${rDec}, ${gDec}, ${bDec}, ${alpha})`;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Commits",
        data: counts,
        borderColor: hslToRgba(primaryHSL),
        backgroundColor: hslToRgba(primaryHSL, 0.1),
        fill: true,
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Hide dots
        pointBackgroundColor: hslToRgba(primaryHSL),
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index" as const,
        intersect: false,
        backgroundColor: hslToRgba(primaryHSL, 0.9),
        borderColor: hslToRgba(primaryHSL),
        borderWidth: 1,
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 12 },
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            return `${context.parsed.y} commits`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...counts, 10) + 5,
        ticks: {
          color: hslToRgba("0 0% 45%"),
          stepSize: 1,
        },
        grid: {
          color: hslToRgba("0 0% 92%"),
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="w-full" style={{ height: "200px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CommitTrendChart;
