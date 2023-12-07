import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Header from '../Common/Header';
import JoditEditor from "jodit-react"
import { useRef } from "react"

function AddBlog() {


    const [content,setContent] =useState('')
    const editor = useRef(null)
    const config={
        placeholder:"Start typing...",

    }
    
    //handling file chagne event
    // const handleFileChange=(event)=>{
    //     console.log(event.target.files[0])
    //     setImage(event.target.files[0])
    // }

    
    const contentFieldChanaged = (data) => {
        setContent({ data })
    }



    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const submitHandler = (values) => {
        values.preventDefault();
        console.log('values', { title, desc });
        window.location.href ='/myblog'
    }
    return (
        <>
            <Header />
            <Container className="mt-4 pb-3" style ={{boxShadow: '5px 4px 6px #81626270'}}>
                <div className="d-flex">
                    <h2 className='m-auto'>Add a blog</h2>
                </div>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title of your blog"
                            onChange={({ target: { value } }) => setTitle(value)}
                            value={title}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <JoditEditor
                        ref={editor}
                        value={content}
config={config}
                        onChange={(newContent) => contentFieldChanaged(newContent)}
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default AddBlog;
