import React, {useState,useEffect} from "react";
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './frontend.pdf'
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function FullRoadmapShow() {
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
      }, []);
  return (
    <div>
      <div className="mainDiv container mt-4">
        <h1 className="text-left"> "roadmap.title" </h1>
        <p>"desc"</p>
        <div className="container mt-3 row text-center">
        <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
        </div>
      </div>
    </div>
  );
}

export default FullRoadmapShow;
