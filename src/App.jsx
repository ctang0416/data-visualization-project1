import census from "/census";
import React from 'react';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";



function App() {
  
  const dataIn1900 = census.filter(census => census.Year === 1900);
  const dataIn2000 = census.filter(census => census.Year === 2000);

  const ages = []
  dataIn1900.slice(0, 19).forEach((data) => {ages.push(data.Age)})

  const population1900 = []
  const male1900 = dataIn1900.map((data) => data.People).slice(0, 19)
  const female1900 = dataIn1900.map((data) => data.People).slice(19, 38)

  for (var i = 0; i < Math.max(male1900.length, female1900.length); i++) {
    population1900.push((male1900[i] ) + (female1900[i]));
  }

  console.log(population1900)

  const population2000 = []
  const male2000 = dataIn2000.map((data) => data.People).slice(0, 19)
  const female2000 = dataIn2000.map((data) => data.People).slice(19, 38)


  for (var i = 0; i < Math.max(male2000.length, female2000.length); i++) {
    population2000.push((male2000[i] ) + (female2000[i]));
  }

  console.log(population2000)




  const chartSize = 700;
  const chartSizeWidth = 1200;
  const margin = 30;
  const legendPadding = 200;

  const scale = population2000.map(num => num/100000)
  const _extent = extent(scale);
  console.log(_extent)
  const _scaleY = scaleLinear()
    .domain([0, _extent[1]])
    .range([chartSize - margin, margin]);
  
  const _scaleAge = scaleBand()
    .domain(ages)
    .range([0, chartSizeWidth]);


  return (
    <div style={{ margin: 50 }}>
      <h1>US Census in 1900 vs 2000</h1>
      <div style={{ display: "flex" }}>
      <svg
          width={chartSizeWidth + legendPadding}
          height={chartSize + 50}
        >
          <AxisLeft strokeWidth={1} left={margin + 50} scale={_scaleY} />
          <AxisBottom
            strokeWidth={1}
            top={chartSize - margin}
            left={margin + 50}
            scale={_scaleAge}
            tickValues={ages}
          />

          <text x="-400" y="30" transform="rotate(-90)" fontSize={16}>
            Population (in 100000 people)
          </text>

          <text x="600" y="720" fontSize={16}>
            Ages
          </text>

          

          {population1900.map((num, i) => {
            return (
              <rect
                x={97 + i * 63}
                y={_scaleY(num/100000)}
                height={_scaleY(0) - _scaleY(num/100000)}
                width={15}
                fill={`rgb(${100},${100},${100})`}
              />
            );
          })}

          {population2000.map((num, i) => {
            return (
              <rect
                x={112 + i * 63}
                y={_scaleY(num/100000)}
                height={_scaleY(0) - _scaleY(num/100000)}
                width={15}
                fill={`rgb(${200},${200},${200})`}
              />
            );
          })}

<rect
            x={chartSizeWidth - 135}
            y={50}
            height={20}
            width={30}
            fill={`rgb(${200},${200},${200})`}
          />

          <rect
            x={chartSizeWidth - 135}
            y={20}
            height={20}
            width={30}
            fill={`rgb(${100},${100},${100})`}
          />
          

          <text x={chartSizeWidth -100} y="35" fontSize={12}>
            1900
          </text>

          <text x={chartSizeWidth -100} y="65" fontSize={12}>
            2000
          </text>

        </svg>
      </div>
      <p>
      Since I would like to compare the population in 1900 and 2000 in the chart, I choose to use a grouped bar 
      chart to show the data. By having the bars of the same age in 1900 and 2000 next to each other,  it would 
      be easier to visually compare the data and can clearly see the differences between 1900 and 2000. For the 
      color shades of the bar, I choose to use just a darker grey and a lighter grey instead of using different 
      colors because I think this way would make the visualization cleaner. For the y-axis scale, I make the unit 
      be in 100000 people so that the scale won’t be a long number which might be hard to read.
      </p>
      <p>
      One of the insights I got from the chart is that there is a huge population growth between 1900 and 2000. I 
      think one of the reasons might be a baby boom. There was a baby boom from 1946  to 1964. As we can see in the 
      cart, the ages that have the most significant difference between 1900 and 200 are age 35 and 40, which those 
      people’s age match the year of the baby boom. Another reason that might increase the population might be 
      immigration. There are some immigration waves between 1900 and 2000. With immigration, it can increase the 
      population at any age. Additionally, in the chart, we can also see that there are more people at the age of 
      90 in 2000 than in 1900. With all the technology and medication improvement, I think people would be able to 
      live a longer life. There are also a lot more babies born in 2000 compared to 1900. Since there are more people 
      in the age of 20s and 30s, it’s reasonable that there are more babies.
      </p>
      <p> Link to Github page: <a href="https://github.com/ctang0416/data-visualization-project1.git">https://github.com/ctang0416/data-visualization-project1.git</a></p>
    </div>
  );
}

export default App
