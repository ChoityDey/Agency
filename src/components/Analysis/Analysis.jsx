import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AnaImage from '../../assets/images/analysis.jpg'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import Analysis from '../../assets/images/analysis.jpg'

const Analysis = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
  return (
    <>
    <Container className="Analysis">
         <div>
            <Container>
                <Row>
                     <Col sm={12} md={6} lg={8}>
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <h1 className='AnalysisContent'>What do we do?</h1>
                                    <p className='AnalysisContentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim ex et qui, modi repellendus aperiam reprehenderit dignissimos aut laborum ipsum impedit similique! Enim non rerum omnis reiciendis debitis officiis!</p>

                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    <h4>Our Working Process.</h4>
                                    <div style={{width:'100%',height:'300px'}} >
                                        <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                barSize={30}
                                                >
                                                <XAxis dataKey="name"  />
                                                <YAxis  />
                                                <Tooltip />                                       
                                                <Bar dataKey="percentages" fill="#333" background={{ fill: '#eee' }} />
                                                </BarChart>
                                        </ResponsiveContainer>

                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    
                    </Col>

                    <Col className='Image' sm={12} md={6} lg={4}>
                        <img src={AnaImage} />
                    </Col>

                </Row>

            </Container>
         </div>

      </Container>
    </>
  )
}

export default Analysis
