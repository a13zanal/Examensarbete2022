import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Recharts = ({data}) => {
    return(
        <div className='charts'>
            <h3>Recharts</h3>
            <ResponsiveContainer width="100%" aspect={3}>
                {/* Byte height eftersom Root inte har några dementions till aspect = 3 => En tredjedel av bredden */}
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 50,
                        left: 50,
                        bottom: 50,
                    }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="team" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="starpoints" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Recharts;