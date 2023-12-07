import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Header from '../Common/Header';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const EditBlog = () => {


    const { blogid } = useParams()
    console.log('blogid', blogid);
    // const dispatch = useDispatch()

    // const [blog, setblog] = useState({})
    // const [totalblogs, setTotalblogs] = useState([]);

    // we will fetch values of blogs directly from api 
    // const { blogs } = useSelector(state => state.blogsReducer)

    // useEffect(() => {

    //     if (blogs.length === 0) {
    //         dispatch(getAllblogs())
    //     }

    //     else {
    //         setTotalblogs(blogs)
    //         setblog(blogs.find(blog => blog._id === blogid))
    //     }
    // }, [blogs])

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const submitHandler = (values) => {
        values.preventDefault();
        console.log('values', { title, desc });
        window.location.href = '/myblog'
    }

    return (
        <>
            <Header />
            <Container className="mt-4 pb-3" style={{ boxShadow: '5px 4px 6px #81626270' }}>
                <div className="d-flex">
                    <h2 className='m-auto'>Edit blog</h2>
                </div>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title of your blog"
                            onChange={({ target: { value } }) => setTitle(value)}
                            defaultValue='Title given by mentor'
                            value={title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="description"
                            value={desc}
                            defaultValue='Description given by mentor'
                            onChange={({ target: { value } }) => setDesc(value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditBlog
