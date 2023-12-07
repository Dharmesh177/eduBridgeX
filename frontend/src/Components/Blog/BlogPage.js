import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Common/Header'
import Tag from '../Common/Tag'
import Button from 'react-bootstrap/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const BlogPage = () => {

    const tags = ['Machine Learning', 'Python', 'JavaScript']
    const ToprightButton = {
        backgroundColor: "#D5F0E1",
        color: "#52B67D",
        fontSize: 13,
        fontWeight: "bold",

    };


    return (
        <>
            <Header index="3" />
            <div className='ms-3'>

                {/* <div className='d-flex justify-content-between align-items-center'> */}
                <div>
                    {/* <p class="card-text"><small class="text-muted">Jay Sojitra</small></p>
                    <p class="card-text"><small class="text-muted">updated 11 hours ago </small></p> */}
                    <div
                        className='ms-3 mt-3'
                    >
                        <Row>
                            <Col xs={12} md={9} className='d-flex justify-content-around' style={{ width: '38%' }}>
                                <p class="card-text"><b>Author : </b><small class="text-muted">Jay Sojitra</small></p>
                                <p class="card-text"><small class="text-muted">updated 11 hours ago </small></p>
                                <p class="card-text text-end"><small >1.2 K</small> <ThumbUpIcon style={{ marginBottom: "6px" }} /></p>
                            </Col>
                            {/* <Col xs={6} md={3}>
                                <p class="card-text"><small class="text-muted">updated 11 hours ago </small></p>
                            </Col> */}
                        </Row>
                    </div>
                </div>

                <div
                    className=' mt-3'
                >
                    <Row>
                        <Col sm={8} className='ms-5'>
                            <div className='d-flex'>
                                <div className='text-start'>
                                    <h4 className='mb-4 mt-2'>Attendance management system using machine learning</h4>
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />
                                    <p>Machine Learning, as the name says, is all about machines learning automatically without being explicitly programmed or learning without any direct human intervention. This machine learning process starts with feeding them good quality data and then training the machines by building various machine learning models using the data and different algorithms. The choice of algorithms depends on what type of data we have and what kind of task we are trying to automate.
                                    </p>
                                    <br />

                                    <div className='d-flex'>
                                        <h4>Mentor Profile : </h4>{' '}
                                        <Button variant="light" className='ms-3'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <PersonOutlineOutlinedIcon /> Profile
                                            </div>
                                        </Button>{' '}
                                    </div>
                                    <div className='d-flex mt-4'>
                                        <h4 className='me-2'>Resources : </h4>{' '}
                                        <Button variant="light" className='ms-5'>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <ArrowDownwardIcon /> Download
                                            </div>
                                        </Button>{' '}
                                    </div>

                                </div>
                                <div style={{
                                    borderLeft: '2px solid #dfdcdf',
                                    height: '900px',
                                    marginLeft : '50px',
                                }}></div>
                            </div>

                        </Col>
                       
                        <Col sm={3} className=''>

                            <h4 className='mb-4 mt-2'>Tag</h4>
                            <hr />
                            <div className='d-flex justify-content-start flex-column mt-3' >
                                {tags.map((tag, i) => {
                                    return <div className='mt-3 ms-2 d-flex justify-content-start flex-column' >
                                        <Tag
                                            title={tag}
                                            customeStyle={ToprightButton}
                                        />
                                    </div>
                                })}
                            </div>

                        </Col>
                    </Row>
                </div>

            </div>

        </>
    )
}

export default BlogPage
