import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { useTranslation } from "react-i18next"; 
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF Worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfReader({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
  }

  const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (

    
    <div className=" rounded-3xl border border-white/10 overflow-hidden">

      {/* PDF */}

      <div className="overflow-auto flex justify-center p-6">

        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <p className="text-white text-center">
               {t("pdfreader.loading")}...
            </p>
          }
          error={
            <p className="text-red-500 text-center">
              {t("pdfreader.pdfLoadFailed")}
            </p>
          }
        >

          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />

        </Document>

      </div>
           <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <button
          onClick={() =>
            setPageNumber((prev) =>
              Math.min(prev + 1, numPages || prev)
            )
          }
          disabled={pageNumber === numPages}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-5 py-2 rounded-xl"
        >
          {isRTL ? "بعدی" : "Next"}
        </button>
        <span className="text-white">
          {isRTL ? "صفحه" : "Page"} {pageNumber} {isRTL ? "از" : "of"}{numPages || "..."}
        </span>
            <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber === 1}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-5 py-2 rounded-xl"
             >
              {isRTL ? "قبلی" : "Prev"}
           </button>
       

      </div>

    </div>
  );
}