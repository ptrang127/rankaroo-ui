import React from 'react';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStackHorizontal } from '@visx/shape';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { LegendOrdinal } from '@visx/legend';
import { DataItem } from '../../utils/types';

const data: DataItem[] = [
  { name: 'Option 1', wins: 10, losses: 20 },
  { name: 'Option 2', wins: 15, losses: 25 },
  { name: 'Option 3', wins: 20, losses: 30 },
];

const keys = ['wins', 'losses'];
const purple1 = '#6c5efb';
const purple2 = '#c998ff';
const purple3 = '#a44afe';
const colors = [purple1, purple2, purple3];
export const background = '#eaedff';
const margin = { top: 20, right: 30, bottom: 40, left: 80 };
const width = 800;
const height = 400;

export default function BarStackHorizontalChart() {
  // Scales
  const yScale = scaleBand<string>({
    domain: data.map((d) => d.name),
    padding: 0.2,
    range: [0, height - margin.top - margin.bottom],
  });

  const xScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((d) => d.wins + d.losses ))],
    range: [0, width - margin.left - margin.right],
  });

  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: colors,
  });

  return (
    <svg width={width} height={height}>
        <rect width={width} height={height} fill={background} rx={20} />
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* BarStackHorizontal */}
            <BarStackHorizontal
                data={data}
                keys={keys}
                y={(d) => d.name}
                yScale={yScale}
                xScale={xScale}
                color={colorScale}
            />

            {/* Left Axis (categories) */}
            <AxisLeft
                scale={yScale}
                stroke={purple3}
                tickStroke={purple3}
                tickLabelProps={() => ({
                    fill: purple3,
                    fontSize: 18,
                    textAnchor: 'end',
                    dy: '0.33em',
                })}
            />

            {/* Bottom Axis (stacked totals) */}
            <AxisBottom
                top={height - margin.top - margin.bottom}
                scale={xScale}
                stroke={purple3}
                tickStroke={purple3}
                tickLabelProps={() => ({
                    fill: purple3,
                    fontSize: 18,
                    textAnchor: 'middle',
                })}
            />
        </g>
      {/* Legend */}
        <LegendOrdinal
            scale={colorScale}
            direction="row"
            labelMargin="0 15px 0 0"
            //transform={`translate(${margin.left}, ${height - margin.bottom + 20})`}
        />
    </svg>
  );
}