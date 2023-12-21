import react from "react";
import styled from 'styled-components';
import { Document, Page, pdfjs} from 'react-pdf';
import resume from "../assets/documents/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Resume = () => {
    return(  
        <Container>
            <Document file={resume}>
                <Page pageNumber={1}/>
            </Document>
        </Container>
    )
}

export default Resume;