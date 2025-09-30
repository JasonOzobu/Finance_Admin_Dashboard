import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartGraph = () => {
	const data = [
		{ month: 'Jan', value: 0 },
		{ month: 'Feb', value: 15 },
		{ month: 'Mar', value: 10 },
		{ month: 'Apr', value: 15 },
		{ month: 'May', value: 20 },
		{ month: 'Jun', value: 0 },
	];

	return (
		<div className="chartgraph">
			<ResponsiveContainer>
				<BarChart
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" vertical={false}>
						<XAxis dataKey={data.month} />
						<YAxis dataKey={data.value} />

						<Tooltip
							formatter={(value) => [`${value}%`, 'percentage']}
							labelFormatter={(label) => `Month: ${label}`}
						/>

						<Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} animationDuration={1500} />
					</CartesianGrid>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ChartGraph;
