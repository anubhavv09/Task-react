import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from 'recharts';

const Chart = ({plan,complete,placed}) => {
 
  const data02 = [
    { name: "Plan", value: plan,color:'#131A95'},
    { name: "Placed", value: placed,color:'#58BFAA' },
    { name: "Complete", value: complete,color:'#D4D7E3' },
  ];

  function CustomLabel({ viewBox, value1, value2,value3 }) {
  
    const { cx, cy } = viewBox;
    return (
      <svg
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        
        <text x={cx} y={cy}>
          <tspan x={cx} y={40} dy="0em" alignmentBaseline="middle" fontSize="20" fill="#39436A">
            {value1}
          </tspan>
          <tspan x={cx} y={44} dy="1.2em" fontSize="11" fontFamily="poppins" fill="#BCBFD1">
            {value2}
          </tspan>
          <tspan x={cx} y={46} dy="2.1em" fontSize="11" fontFamily="poppins" fill="#BCBFD1">
            {value3}
          </tspan>
        </text>
      </svg>
    );
  }

  return (
    <div style={{height:"100px",width:"100px"}}>
      <PieChart width={100} height={100}>
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={38}
          outerRadius={50}
          label={false}
          labelLine={false}
        >
          <Label width={20} position="center" content={<CustomLabel value1={placed} value2={"Placed"} value3={"Orders"}></CustomLabel>}>
          </Label>
             {data02.map((entry, index) => (
                <Cell style={{outline:"none"}} fill={entry.color} />
              ))}
            
            </Pie>
            <Tooltip content={<CustomTooltip/>}></Tooltip>
      </PieChart>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: "#fff", padding: "5px", border: "1px solid #ccc" }}>
          <p>{payload[0].name}</p>
          <p>{payload[0].value}</p>
        </div>
      );
    }
  
    return null;
  };

export default Chart;
