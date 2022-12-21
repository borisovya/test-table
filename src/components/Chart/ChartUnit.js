import React from 'react';
import s from './Chart.module.css'
import {getData} from "../../Data/Data";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export const ChartUnit = () => {

    const Data = getData()

    const dataPrice = {
        labels: Data.map(el=>el.Date),
        datasets: [{
            labels: 'Data chart',
            data: Data.map(el=>el.Price),
            backgroundColor: 'aqua',
            borderColor: 'dodgerblue',
            pointColor: 'blue'
        }
        ]
    }

    const dataVolume = {
        labels: Data.map(el=>el.Date),
        datasets: [{
            labels: 'Data chart',
            data: Data.map(el=>el.Volume),
            backgroundColor: 'aqua',
            borderColor: 'darkviolet',
            pointColor: 'blue'
        }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min:3,
                // max: 6
            }
        }
    }


    return (
        <div id='charts'>
            <div  className={s.chartContainer}>
                <h2>График Date/Price</h2>
                <Line
                    data={dataPrice}
                    options={options}
                />
                <h2>График Date/Volume</h2>
                <Line
                    data={dataVolume}
                    options={options}
                />
            </div>
        </div>
    );
};

