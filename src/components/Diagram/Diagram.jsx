import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styles from './Diagram.module.scss'

export const Diagram = ({ diagramItems, name, colors }) => {
  console.log(diagramItems)
  ChartJS.register(ArcElement, Tooltip, Legend)

  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      tooltip: {
        tileFont: {
          family: 'Montserrat',
        },
        displayColors: false,
      },
      legend: {
        position: 'left',
        labels: {
          color: '#fff',
          boxWidth: 15,
          boxHeight: 15,
          padding: 10,
          font: {
            family: 'Montserrat',
            size: 14,
            weight: 400,
          },
        },
      },
    },
    maintainAspectRatio: false,
    layout: {
      autoPadding: true,
      padding: 0,
    },
  }

  const data = {
    labels: diagramItems.labels,
    datasets: [
      {
        data: diagramItems.data,
        backgroundColor: colors,
      },
    ],
  }

  return (
    <div className={styles.diagram}>
      <h3>{name}: </h3>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}
