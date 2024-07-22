import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
import english from '../../../../images/englidh.jpg'
import social from '../../../../images/social-science1-1200x675.png'
import general from '../../../../images/general-science-1200x675.png'
import carrer from '../../../../images/carrer.webp'
import pva from '../../../../images/arts.jpg'
import it from '../../../../images/IT.png'
import citizen from '../../../../images/citizen.jpeg'
function saveGrade8Details() {
  localStorage.setItem(
    "grade8amharic",
    JSON.stringify({
      title: "Amharic",
      image: amharic,
      description: "የ፰(8)ኛ ክፍል አማርኛ እንደመጀመሪያ ቋንቋ የተማሪ መጽሐፍ",
      chapters: [
        "ምዕራፍ 1: የሥራ ሥነ ምግባር",
        "ምዕራፍ 2: ባህላዊ ቅርስ",
        "ምዕራፍ 3: ሰብዓዊ እሴቶች",
        "ምዕራፍ 4: አጭር ልቦለድ",
        "ምዕራፍ 5: ሥነ-ሕዝብ",
        "ምዕራፍ 6: በረሃማነት",
        "ምዕራፍ 7: የሕፃናት ጉልበት ብዝበዛ",
        "ምዕራፍ 8: ሰላም",
        "ምዕራፍ 9: የአየር ንብረት",
        "ምዕራፍ 10: ተውኔት",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Amharic Textbook",
        grade: 8,
        curriculum: "New",
        units: "10 units",
        pages: 173,
        size: "5MB",
      },
      relatedSubjects: [
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8english",
    JSON.stringify({
      title: "English",
      image: english,
      description: "Download Ethiopia New Curriculum English Student Textbook",
      chapters: [
        "Unit 1 : ECONOMIC ACTIVITIES IN RURAL AREA",
        "Unit 2 : TYPES OF CALENDARS",
        "Unit 3 : TRAFFIC RULES AND REGULATIONS",
        "Unit 4 : ANIMAL CONSERVATION",
        "Unit 5 : LIVESTOCK FARMING",
        "Unit 6 : AFFORESTATION",
        "Unit 7 : CHARITY",
        "Unit 8 : PERSONAL HYGIENE",
        "Unit 9 :  GENDER EQUALITY",
        "Unit 10 : COMPUTER TECHNOLOGY",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "English Textbook",
        grade: 8,
        curriculum: "New",
        units: "10 units",
        pages: 153,
        size: "4MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8maths",
    JSON.stringify({
      title: "Mathematics",
      image: maths,
      description:
        "Download Ethiopia New Curriculum Mathematics Student Textbook",
      chapters: [
        "Unit 1 : Rational Numbers",
        "Unit 2 : Squares, Square Toots, Cubes & Cube Roots",
        "Unit 3 : LInear Equations & Linear Inequalities",
        "Unit 4 : Similarity of Figures",
        "Unit 5 : Theorems of Triangle",
        "Unit 6 : Circle",
        "Unit 7 : Solid Figures & Measurments",
        "Unit 8 : Introduction to Probablity",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Mathematics Textbook",
        grade: 8,
        curriculum: "New",
        units: "8 units",
        pages: 250,
        size: "5MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
      
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8social",
    JSON.stringify({
      title: "Social Studies",
      image: social,
      description:
        "Download Ethiopia New Curriculum Social Studies Student Textbook",
      chapters: [
        "Unit 1 : Physical Characterstics of the Earth",
        "Unit 2 : People & SocioEconomic Activities",
        "Unit 3 : Natural Resources and SocioEconomic Developement",
        "Unit 4 : Early Modern & Modern World History",
        "Unit 5 : Africa Since 1500s",
        "Unit 6 : Modern History of Ethiopia",
        "Unit 7 : Contemporary Glboal Issues",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Social Studies Textbook",
        grade: 8,
        curriculum: "New",
        units: "7 units",
        pages: 213,
        size: "3MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8general",
    JSON.stringify({
      title: "General Science",
      image: general,
      description:
        "Download Ethiopia New Curriculum General Science Student Textbook",
      chapters: [
        "Unit 1 : Basics of SCientific Investigation",
        "Unit 2 : Composition of Matter",
        "Unit 3 : Classification of Compounds",
        "Unit 4 : Human Body Systems & Health",
        "Unit 5 : Ecosystem & Conservation of Natural Resources",
        "Unit 6 : The Solar System",
        "Unit 7 : Physical Phenomena In the Surrounding",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "General Science Textbook",
        grade: 8,
        curriculum: "New",
        units: "7 units",
        pages: 231,
        size: "15MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8pva",
    JSON.stringify({
      title: "Performing & Visual Arts",
      image: pva,
      description: "Download Ethiopia New Curriculum PVA Student Textbook",
      chapters: [
        "Unit 1 : Artistic Perseptions",
        "Unit 2 : Creative Expressions",
        "Unit 3 : History & Culture",
        "Unit 4 : Aesthetic Values",
        "Unit 5 : Connection, Relation & Application",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "PVA Textbook",
        grade: 8,
        curriculum: "New",
        units: "5 units",
        pages: 115,
        size: "34MB",
      },

      relatedSubjects: [

        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
       
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8it",
    JSON.stringify({
      title: "Information Technology",
      image: it,
      description:
        "Download Ethiopia New Curriculum Information Technology Student Textbook",
      chapters: [
        "Unit 1 : Basics of Computer",
        "Unit 2 : Computer Hardware",
        "Unit 3 : Computer Software",
        "Unit 4 : Internet",
        "Unit 5 : Computer Ergonomics",
        "Unit 6 : Logic Oriented Graphics Oriented (LOGO) Programming",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "IT Textbook",
        grade: 8,
        curriculum: "New",
        units: "6 units",
        pages: 115,
        size: "10MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8citizen",
    JSON.stringify({
      title: "Citizenship Education",
      image: citizen,
      description:
        "Download Ethiopia New Curriculum Citizenship Education Student Textbook",
      chapters: [
        "Unit 1 : Virtue Ethics",
        "Unit 2 : State & Government",
        "Unit 3 : Democracy",
        "Unit 4 : Human Right",
        "Unit 5 : Rule of Law",
        "Unit 6 : Conflict Resolution & Peace Building",
        "Unit 7 : Critical Thinking & Problem Solving Skills",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Citizenship Education Textbook",
        grade: 8,
        curriculum: "New",
        units: "7 units",
        pages: 127,
        size: "17MB",
      },

      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },

        { name: "Carrer", link: "/resources/elementary/grade8/career" },
      ],
    })
  );

  localStorage.setItem(
    "grade8career",
    JSON.stringify({
      title: "Carrer & Technical Education (CTE)",
      image: carrer,
      description: "Download Ethiopia New Curriculum CTE Student Textbook",
      chapters: [
        "Unit 1 : Introductionto Carrer & Technical Education",
        "Unit 2 : Personal Carrer Selection",
        "Unit 3 : Self Employment Opportunities",
        "Unit 4 : Self Employment Opportunities",
        "Unit 5 : Self Employment Opportunities",
        "Unit 6 : Preparing For Employment",
        "Unit 7 : Entrepreneurship",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "CTE Textbook",
        grade: 8,
        curriculum: "New",
        units: "7 units",
        pages: 162,
        size: "8MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/elementary/grade8/amharic" },
        { name: "English", link: "/resources/elementary/grade8/english" },
        { name: "Mathematics", link: "/resources/elementary/grade8/maths" },
        { name: "Social Studies", link: "/resources/elementary/grade8/social" },
        {
          name: "General Science",
          link: "/resources/elementary/grade8/general",
        },
        { name: "PVA", link: "/resources/elementary/grade8/pva" },
        {
          name: "Information Technology",
          link: "/resources/elementary/grade8/it",
        },
        {
          name: "Citizenship Education",
          link: "/resources/elementary/grade8/citizen",
        },
      ],
    })
  );
}

export default saveGrade8Details;
