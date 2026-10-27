import { BarChart } from '@mui/x-charts/BarChart';
import type { GraphicProps } from '../../interfaces/interfaces';

function Graphic(props: GraphicProps) {
    const {quantsIda, quantsVolta, quantsVespertino, dates} = props
  return (
    <div className="w-full h-full flex">
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: dates,
            scaleType: 'band',
            barGapRatio: 0.1, 
            categoryGapRatio: 0.3,
            label: " ",
            labelStyle: {
                fontSize: 12,
                fontFamily: "inter",
            },
            tickSize: 10,
            tickLabelStyle: {
              angle: 0,
              textAnchor: 'middle', 
              dominantBaseline: 'hanging',
              fontSize: 12,
            },
          },
        ]}
        
        yAxis={[{
            tickNumber: 8,
        }]}

        series={[
          {
            label: "Ida",
            data: quantsIda,
          },
          {
            label: "Volta",
            data: quantsVolta,
          },
          {
            label: "Vespertino",
            data: quantsVespertino,
          },
        ]}
        grid={{ horizontal: true }}
        height={220}
        borderRadius={5}
        colors={['#FFBF00', '#484041', '#ee4266']}
        margin={{ top: 20, bottom: 0, left: -20, right: 5 }}
      />
    </div>
  );
}

export default Graphic;