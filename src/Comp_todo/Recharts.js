import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Recharts = ({data}) => {

    return(
        <div className='charts'>
            <h3>Recharts</h3>
            <ResponsiveContainer width={800} aspect={2}>
                <BarChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 50,
                        left: 50,
                        bottom: 50,
                    }}>
                <XAxis dataKey="team" />
                <YAxis domain={[0,10000]} tickCount={11}/>
                <Bar dataKey="starpoints" fill="#AA4BF5" isAnimationActive={false}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Recharts;