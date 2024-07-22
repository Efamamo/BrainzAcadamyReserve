import './ElemetarySubjectDetail.css'
import { Link, useParams } from "react-router-dom";
import pdf from "../../../images/pdf2.png";
import download from "../../../images/downloading.png";

function openBook(grade, subject) {
  window.location.href = `${process.env.PUBLIC_URL}/books/${grade}/${grade}-${subject}.pdf`;
}

function ElementarySubjectDetail() {
  const { grade, subject } = useParams();

  const pdfPath = `${process.env.PUBLIC_URL}/books/${grade}/${grade}-${subject}.pdf`;

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${grade}-${subject}.pdf`;
    link.click();
  };
  const currentSubject = JSON.parse(localStorage.getItem(`${grade}${subject}`));

  return (
    <div className="outer-detail-container">
      <div className="detail-container" style={{ marginBottom: "30px" }}>
        <h2 className="detail-intro">
          <strong>
            Ethiopian Grade {currentSubject.summery.grade} (New Curriculum) {currentSubject.title}{" "}
            Textbook
          </strong>
        </h2>
        <h3 className="detail-intro">
          <strong>{currentSubject.description}</strong>
        </h3>
        <img src={currentSubject.image}/>
       
        <div className="chapters">
          <h2>Chapters in this textbook</h2>

          <h3>This Textbook contains {currentSubject.chapters.length} chapters</h3>
          <ul>
            {currentSubject.chapters.map((chapter) => (
              <li key={chapter}>{chapter}</li>
            ))}
          </ul>
        </div>
        
      

        <h2 className="detail-intro">Book Summary</h2>

        <div className="detail-summery">
          <div>
            <p>
              <strong>Country</strong>: {currentSubject.summery.country}
            </p>
            <p>
              <strong>Publisher</strong>: {currentSubject.summery.publisher}
            </p>
            <p>
              <strong>Subject</strong>: {currentSubject.summery.subject}
            </p>
            <p>
              <strong>Grade</strong>: {currentSubject.summery.grade}
            </p>
          </div>
          <div>
            <p>
              <strong>Curriculum</strong>: {currentSubject.summery.curriculum}
            </p>
            <p>
              <strong>Total Units</strong>: {currentSubject.summery.units}
            </p>
            <p>
              <strong>Total Pages</strong>: {currentSubject.summery.pages}
            </p>
            <p>
              <strong>File Size</strong>: {currentSubject.summery.size}
            </p>
          </div>
        </div>
        <div className="bottom-detail">
          <button
            onClick={() => {
              openBook(grade, subject);
            }}
            style={{ margin: "auto" }}
            id="download-button"
          >
            <img style={{ width: "20px" }} src={pdf} /> Read Book
          </button>
          <button
            onClick={handleDownload}
            style={{ margin: "auto" }}
            id="download-button"
          >
            <img style={{ width: "20px" }} src={download} /> Download
          </button>
        </div>
      </div>
      <div className="sidebar">
        <h2>
          Related {grade.slice(0, 1).toUpperCase()}
          {grade.slice(1, 100)} TextBooks
        </h2>
        {currentSubject.relatedSubjects.map((sub) => (
          <Link to={sub.link}>
            <div className="related-links">
              <img src={pdf} />
              <h3>{sub.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ElementarySubjectDetail;
