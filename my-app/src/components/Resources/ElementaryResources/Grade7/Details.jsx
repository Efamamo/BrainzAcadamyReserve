
import maths from "../../../../images/maths.jpeg";
import amharic from "../../../../images/amharic.jpeg";
import english from '../../../../images/englidh.jpg'
import social from '../../../../images/social-science1-1200x675.png'
import general from '../../../../images/general-science-1200x675.png'
import carrer from '../../../../images/carrer.webp'
import pva from '../../../../images/arts.jpg'
import it from '../../../../images/IT.png'
import citizen from '../../../../images/citizen.jpeg'
function saveGrade7Details(){
        
    localStorage.setItem(
      "grade7amharc",
      JSON.stringify({
        title: "Amharic",
        image: amharic,
        description: "የ፰(7)ኛ ክፍል አማርኛ እንደመጀመሪያ ቋንቋ የተማሪ መጽሐፍ",
        chapters: [
        
          "ምዕራፍ 1 : ፈጥሮን ማድነቅ",
          "ምዕራፍ 2 : ተሰብ እቅድ",
          "ምዕራፍ 3 : በጎ ፍቃደኝነት",
          "ምዕራፍ 4 : ታዋቂ ሰዎች የህይወት ታሪክ",
          "ምዕራፍ 5 : ውሃ እና ጥቅሙ",
          "ምዕራፍ 6 : የሰዎች ዝውውር",
          "ምዕራፍ 7 : ማህበራዊ ግንኙነት",
          "ምዕራፍ 8 : ሱስ",
          "ምዕራፍ 9 : የሃገር ፍቅር",
          "ምዕራፍ 10 : ቃላዊ ግጥም",
        ],
        summery: {
          country: "Ethiopia",
          publisher: "MOE, Ethiopia",
          subject: "Amharic Textbook",
          grade: 7,
          curriculum: "New",
          units: "10 units",
          pages: 159,
          size: "8MB",
        },
        relatedSubjects : [
          {name: "English",link: "/resources/elementary/grade7/english"},
          {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
          {name: "Social Studies", link: "/resources/elementary/grade7/social"},
          {name: "General Science", link: "/resources/elementary/grade7/general"},
          {name: "PVA", link: "/resources/elementary/grade7/pva"},
          {name: "Information Technology", link: "/resources/elementary/grade7/it"},
          {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
          {name: "Carrer",link: "/resources/elementary/grade7/career"}
        ]
      })
    );
  

  
    localStorage.setItem(
      "grade7english",
      JSON.stringify({
        title: "English",
        image: english,
        description: "Download Ethiopia New Curriculum English Student Textbook",
        chapters: [
          "Unit 1 : LIVING IN RURAL AREA",
          "Unit 2 : HISTORY OF CALENDAR",
          "Unit 3 : Road Safety",
          "Unit 4 : ENDEMIC ANIMALS IN ETHIOPIA",
          "Unit 5 : DIARY",
          "Unit 6 : LAND CONSERVATION",
          "Unit 7 : VOLUNTEERISM",
          "Unit 8 : FITNESS",
          "Unit 9 : SELF-EXPRESSION",
          "Unit 10 : COMPUTER DEVELOPMENT",
        ],
        summery: {
          country: "Ethiopia",
          publisher: "MOE, Ethiopia",
          subject: "English Textbook",
          grade: 7,
          curriculum: "New",
          units: "10 units",
          pages: 89,
          size: "12MB",
        },
        relatedSubjects : [
          {name: "Amharic",link: "/resources/elementary/grade7/amharc"},
          {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
          {name: "Social Studies", link: "/resources/elementary/grade7/social"},
          {name: "General Science", link: "/resources/elementary/grade7/general"},
          {name: "PVA", link: "/resources/elementary/grade7/pva"},
          {name: "Information Technology", link: "/resources/elementary/grade7/it"},
          {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
          {name: "Carrer",link: "/resources/elementary/grade7/career"}
        ]
      })
    );



    localStorage.setItem(
        "grade7maths",
        JSON.stringify({
          title: "Mathematics",
          image: maths,
          description: "Download Ethiopia New Curriculum Mathematics Student Textbook",
          chapters: [
            "Unit 1 : Basic Concept of sets",
            "Unit 2 : Integers",
            "Unit 3 : Linear Equations",
            "Unit 4 : Ratio, Proportions, and percentage",
            "Unit 5 : Perimeter and area of plane figure",
            "Unit 6 : Concurrency of plane figure",
            "Unit 7 : Data Handling",
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "Mathematics Textbook",
            grade: 7,
            curriculum: "New",
            units: "7 units",
            pages: 252,
            size: "127MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );

      localStorage.setItem(
        "grade7social",
        JSON.stringify({
          title: "Social Studies",
          image: social,
          description: "Download Ethiopia New Curriculum Social Studies Student Textbook",
          chapters: [
            "Unit 1 : Physical Characterstics of the Earth",
            "Unit 2 : Human Evolution and World Population",
            "Unit 3 : Human and Natural Resources",
            "Unit 4 : Ancient Civilizations and Medieval",
            "Unit 5 : Ancient History of Africa",
            "Unit 6 : States and Peoples of Ancient and Medieval Ethiopia",
            "Unit 7 : Contemporary Glboal Issues",
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "Social Studies Textbook",
            grade: 7,
            curriculum: "New",
            units: "7 units",
            pages: 211,
            size: "11MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );


      localStorage.setItem(
        "grade7general",
        JSON.stringify({
          title: "General Science",
          image: general,
          description: "Download Ethiopia New Curriculum General Science Student Textbook",
          chapters: [
            "Unit 1 : Basic Concepts of Science",
            "Unit 2 : Matter in Our Surrounding",
            "Unit 3 : Elements, Compound, and Chemical Reaction",
            "Unit 4 : Cell as the Basis of Life",
            "Unit 5 : Living Things and Their Diversity",
            "Unit 6 : Earth in Space",
            "Unit 7 : Motion, Force, Energy, And Energy Resources",
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "General Science Textbook",
            grade: 7,
            curriculum: "New",
            units: "7 units",
            pages: 255,
            size: "11MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );

      localStorage.setItem(
        "grade7pva",
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
            grade: 7,
            curriculum: "New",
            units: "5 units",
            pages: 156,
            size: "6MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );

      localStorage.setItem(
        "grade7it",
        JSON.stringify({
          title: "Information Technology",
          image: it,
          description: "Download Ethiopia New Curriculum Information Technology Student Textbook",
          chapters: [
            "Unit 1 : Introduction to Information & Communication Technology ",
            "Unit 2 : Computer Hardware ",
            "Unit 3 : Computer Software",
            "Unit 4 : Internet",
            "Unit 5 : Security and Safety of Computer ",
            "Unit 6 : Logic Oriented Graphics Oriented (LOGO) Programming"
    
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "IT Textbook",
            grade: 7,
            curriculum: "New",
            units: "6 units",
            pages: 94,
            size: "10MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );

      localStorage.setItem(
        "grade7citizen",
        JSON.stringify({
          title: "Citizenship Education",
          image: citizen,
          description: "Download Ethiopia New Curriculum Citizenship Education Student Textbook",
          chapters: [
            "Unit 1 : Citizenship",
            "Unit 2 : State & Government",
            "Unit 3 : Democracy",
            "Unit 4 : Rule of Law",
            "Unit 5 : Human Right",
            "Unit 6 : Engagement in Community Affairs",
            "Unit 7 : Critical Thinking"
    
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "Citizenship Education Textbook",
            grade: 7,
            curriculum: "New",
            units: "7 units",
            pages: 89,
            size: "12MB",
          },
          relatedSubjects : [
            {name: "Amharic", link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Carrer",link: "/resources/elementary/grade7/career"}
          ]
        })
      );

      localStorage.setItem(
        "grade7career",
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
            "Unit 6 : Recognizing Employment Opportunities",
            "Unit 7 : Employ Ability",
            "Unit 8 : Preparing For Employment"
    
            
            
          ],
          summery: {
            country: "Ethiopia",
            publisher: "MOE, Ethiopia",
            subject: "CTE Textbook",
            grade: 7,
            curriculum: "New",
            units: "8 units",
            pages: 189,
            size: "8MB",
          },
          relatedSubjects : [
            {name: "Amharic",link: "/resources/elementary/grade7/amharc"},
            {name: "English",link: "/resources/elementary/grade7/english"},
            {name: "Mathematics", link: "/resources/elementary/grade7/maths"},
            {name: "Social Studies", link: "/resources/elementary/grade7/social"},
            {name: "General Science", link: "/resources/elementary/grade7/general"},
            {name: "PVA", link: "/resources/elementary/grade7/pva"},
            {name: "Information Technology", link: "/resources/elementary/grade7/it"},
            {name: "Citizenship Education", link: "/resources/elementary/grade7/citizen"},
            
          ]
        })
      );

      
  

      
  
}

export default saveGrade7Details

