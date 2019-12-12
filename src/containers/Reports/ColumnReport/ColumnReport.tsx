import React, { Component } from "react";
import Chart from "react-apexcharts";

interface IProps {
  title: string;
}

interface IState {
  options: any;
  series: any[];
}


class ColumnReport extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      options: {
        
        chart: {
          id: "apexchart-example"
        },
        plotOptions: {
          bar: {
              // horizontal: true,
              columnWidth: '30',
              
          },
      },
      dataLabels: {
        enabled: false
      },
        title: {
          text: props.title,
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#f6009c"],
            shadeIntensity: 1,
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        colors: "#a100ff",
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Chart
      options={this.state.options}
      series={this.state.series}
      type="bar"
      width={500}
      height={250}
    />
    );
  }
}

export default ColumnReport;
