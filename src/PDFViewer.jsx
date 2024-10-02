import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFViewer({fileUrl}) {
  return (
    <div className="pdf-viewer" style={{ height: '600px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl}/>
      </Worker>
    </div>
  );
}
export default PDFViewer;