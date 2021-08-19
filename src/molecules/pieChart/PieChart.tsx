import React, { useEffect } from 'react';
import c3 from 'c3';

export const PieChart = () => {
    useEffect(() => {
        c3.generate({
            bindto: '.pieChart',
            data: {
                columns: [
                    ['data1', 25],
                    ['data2', 25],
                    ['data3', 25],
                    ['data4', 25]
                ],
                type: 'pie',
            },
            legend: {
                hide: true
            },
            pie: {

            }
        })
    }, [])
    return <div className='pieChart' style={{width: 600}}/>
}