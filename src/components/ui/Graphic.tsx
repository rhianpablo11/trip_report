import { BarChart } from '@mui/x-charts/BarChart';


function Graphic(){

    return (
        <>
            <div className="w-full h-full">
                <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['bar A', 'bar B', 'bar C'],
                    categoryGapRatio: 0.4,
                    barGapRatio: 0.3,
                    },
                ]}
                series={[
                    {
                    data: [2, 25, 30],
                    },
                    {
                    data: [12, 5, 30],
                    },
                    {
                    data: [20, 15, 13],
                    }
                ]}
                height={300}
                />
            </div>
        
        </>
    )
}


export default Graphic