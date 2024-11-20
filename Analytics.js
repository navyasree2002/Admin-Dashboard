import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from '../pages/api/fetchData';

const Analytics = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const data = await fetchData('analytics');
      setChartData({
        labels: data?.dates,
        datasets: [
          {
            label: 'Views',
            data: data?.views,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      });
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Analytics;
