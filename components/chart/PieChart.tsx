import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function PieChart({
  title,
  categories,
}: {
  title: string;
  categories: { category: string; total: number }[];
}) {
  const categoryData = categories.map((item, index) => {
    if (index === 0) {
      return {
        name: item.category,
        y: item.total,
        sliced: true,
        selected: true,
      };
    }
    return { name: item.category, y: item.total };
  });
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: title,
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: categoryData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
