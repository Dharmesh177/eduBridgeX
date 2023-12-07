import React from 'react'
import Header from '../Common/Header'
import Tag from '../Common/Tag'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const visibilityStyle = {
        backgroundColor: "#D5E3FE",
        color: "#2C5EFF",
        fontSize: 15,
        fontWeight: "bold",
        margin: "4px"
    };

    const rightButton = {
        backgroundColor: "#D5F0E1",
        color: "#52B67D",
        fontSize: 15,
        fontWeight: "bold",

        width: 'max-content',
        marginLeft: '3px'
    };

    const ToprightButton = {
        backgroundColor: "#D5F0E1",
        color: "#52B67D",
        fontSize: 13,
        fontWeight: "bold",

    };

    const data = [
        {
            title: 'Blockchain',
            description: 'Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.',
            tags: [
                'JavaScript', 'React', 'Next'
            ],
            Author: 'Jay Sojitra',
            branch: 'IT',
            Like: '1.4'
        },
        {
            title: 'Best Resourses need to top in  MBBS First Year',
            description: 'Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.',
            tags: [
                'JavaScript', 'React', 'Next'
            ],
            Author: 'Siddharth Patel',
            branch: 'IT',
            Like: '1.6'
        },
        {
            title: 'Machine Learning',
            description: 'Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.',
            tags: [
                'JavaScript', 'React', 'Next'
            ],
            Author: 'Dharmesh Vala',
            branch: 'CE',
            Like: '1.4'
        }
    ]
    return (
        <>
            <Header index={3} />
            <div className="d-flex justify-content-center flex-column mt-3">
                {
                    data.map((blogs, i) => {
                        return (
                            <div class="card mb-3 d-flex justify-content-center" style={{
                                width: '80%',
                                margin: 'auto',
                                borderRadius: '7px',
                                boxShadow: 'rgb(0 0 0 / 25%) 5px 5px 7px'
                            }}>
                                <div class="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Link to='/blogpage' style={{ color: 'black' }}>
                                                <h5 class="card-title text-start ">{blogs.title}</h5>
                                            </Link>
                                        </div>
                                        <div className='d-flex justify-content-evenly align-items-center' style={{ width: '11%' }}>
                                            <Tag
                                                title={blogs.branch}
                                                customeStyle={ToprightButton}
                                            />
                                            <p class="card-text text-end"><small class="text-muted">{blogs.Like} K</small> <ThumbUpIcon style={{ marginBottom: "6px" }} /></p>

                                        </div>
                                    </div>

                                    <p class="card-text text-start">{blogs.description}</p>
                                    <div className='d-flex justify-content-between' style={{ marginTop: '12px' }}>

                                        <div className='d-flex justify-content-evenly' style={{
                                            width: '30%',
                                        }}>
                                            {blogs.tags.map((tag, i) => {
                                                return (
                                                    <Tag
                                                        title={tag}
                                                        customeStyle={visibilityStyle}
                                                    />)
                                            })}

                                        </div>
                                        <div className="d-flex justify-content-evenly align-items-center">

                                            <div><b>Author</b> :

                                            </div>
                                            <div>
                                                <Tag
                                                    title={blogs.Author}
                                                    customeStyle={rightButton}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </>
    )
}

export default Blogs
