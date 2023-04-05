import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarChart({
  title,
  categories,
  maleData,
  femaleData,
}: {
  title: string;
  categories: string[];
  maleData: number[];
  femaleData: number[];
}) {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: title,
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories,
      crosshair: true,
      title: { text: "型態" },
    },
    yAxis: {
      min: 0,
      title: {
        text: "數量",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}人</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "男性",
        data: maleData,
      },
      {
        name: "女性",
        data: femaleData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
