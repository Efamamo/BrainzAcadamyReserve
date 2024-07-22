const generalExam = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "What is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      correctAnswer: "2"
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Pb", "Pt"],
      correctAnswer: "Au"
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      question: "Who discovered penicillin?",
      choices: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Alexander Fleming"],
      correctAnswer: "Alexander Fleming"
    },
    {
      question: "What is the longest river in the world?",
      choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      correctAnswer: "Nile River"
    },
    {
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correctAnswer: "Mitochondria"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Who wrote '1984'?",
      choices: ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "Ernest Hemingway"],
      correctAnswer: "George Orwell"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Graphite"],
      correctAnswer: "Diamond"
    },
    {
      question: "What is the capital of Japan?",
      choices: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
      correctAnswer: "Tokyo"
    },
    {
      question: "Who was the first President of the United States?",
      choices: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
      correctAnswer: "George Washington"
    },
    {
      question: "What is the boiling point of water?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: "100°C"
    },
    {
      question: "What is the most widely spoken language in the world?",
      choices: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
      correctAnswer: "Mandarin Chinese"
    },
    {
      question: "What is the main ingredient in guacamole?",
      choices: ["Tomato", "Onion", "Avocado", "Lime"],
      correctAnswer: "Avocado"
    },
    {
      question: "Who developed the theory of relativity?",
      choices: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
      correctAnswer: "Albert Einstein"
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Monaco", "Malta", "Vatican City", "San Marino"],
      correctAnswer: "Vatican City"
    },
    {
      question: "Who is the author of 'Harry Potter'?",
      choices: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "Roald Dahl"],
      correctAnswer: "J.K. Rowling"
    },
    {
      question: "What is the speed of light?",
      choices: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "299,792,458 m/s"],
      correctAnswer: "299,792,458 m/s"
    },
    {
      question: "Who painted the Sistine Chapel ceiling?",
      choices: ["Raphael", "Michelangelo", "Donatello", "Leonardo da Vinci"],
      correctAnswer: "Michelangelo"
    },
    {
      question: "What is the capital of Italy?",
      choices: ["Venice", "Rome", "Florence", "Milan"],
      correctAnswer: "Rome"
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Yuan", "Won", "Yen", "Ringgit"],
      correctAnswer: "Yen"
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "HO", "H2O2"],
      correctAnswer: "H2O"
    },
    {
      question: "What is the main gas found in the air we breathe?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Nitrogen"
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      choices: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
      correctAnswer: "F. Scott Fitzgerald"
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Who is known as the father of computers?",
      choices: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
      correctAnswer: "Charles Babbage"
    },
    {
      question: "What is the chemical symbol for sodium?",
      choices: ["Na", "S", "Sn", "K"],
      correctAnswer: "Na"
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      choices: ["Emily Bronte", "Jane Austen", "Charles Dickens", "George Eliot"],
      correctAnswer: "Jane Austen"
    },
    {
      question: "What is the largest desert in the world?",
      choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
      correctAnswer: "Antarctic Desert"
    },
    {
      question: "Who discovered America?",
      choices: ["Marco Polo", "Christopher Columbus", "Leif Erikson", "Vasco da Gama"],
      correctAnswer: "Christopher Columbus"
    },
    {
      question: "What is the main ingredient in hummus?",
      choices: ["Chickpeas", "Lentils", "Beans", "Peas"],
      correctAnswer: "Chickpeas"
    },
    {
      question: "What is the capital of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "Who is known as the 'Bard of Avon'?",
      choices: ["John Milton", "Geoffrey Chaucer", "William Shakespeare", "John Donne"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the smallest ocean in the world?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
      correctAnswer: "Arctic Ocean"
    },
    {
      question: "What is the currency of India?",
      choices: ["Dollar", "Rupee", "Yen", "Euro"],
      correctAnswer: "Rupee"
    },
    {
      question: "Who wrote 'The Odyssey'?",
      choices: ["Homer", "Virgil", "Sophocles", "Plato"],
      correctAnswer: "Homer"
    },
    {
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "What is the smallest country in Africa?",
      choices: ["Seychelles", "Djibouti", "Gambia", "Lesotho"],
      correctAnswer: "Seychelles"
    },
    {
      question: "Who painted 'Starry Night'?",
      choices: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Paul Cezanne"],
      correctAnswer: "Vincent van Gogh"
    },
    {
      question: "What is the main component of the sun?",
      choices: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
      correctAnswer: "Hydrogen"
    },
    {
      question: "What is the largest island in the world?",
      choices: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
      correctAnswer: "Greenland"
    },
    {
      question: "Who wrote 'The Catcher in the Rye'?",
      choices: ["J.D. Salinger", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
      correctAnswer: "J.D. Salinger"
    },
    {
      question: "What is the capital of Egypt?",
      choices: ["Cairo", "Alexandria", "Giza", "Luxor"],
      correctAnswer: "Cairo"
    },
    {
      question: "Who discovered gravity?",
      choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
      correctAnswer: "Isaac Newton"
    },
    {
      question: "What is the capital of Brazil?",
      choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correctAnswer: "Brasília"
    },
    {
      question: "Who wrote 'Moby-Dick'?",
      choices: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Edgar Allan Poe"],
      correctAnswer: "Herman Melville"
    },
    {
      question: "What is the main language spoken in Argentina?",
      choices: ["Portuguese", "French", "English", "Spanish"],
      correctAnswer: "Spanish"
    },
    {
      question: "What is the currency of the United Kingdom?",
      choices: ["Euro", "Pound Sterling", "Dollar", "Franc"],
      correctAnswer: "Pound Sterling"
    },
    {
      question: "Who is the author of 'The Lord of the Rings'?",
      choices: ["C.S. Lewis", "George R.R. Martin", "J.R.R. Tolkien", "J.K. Rowling"],
      correctAnswer: "J.R.R. Tolkien"
    },
    {
      question: "What is the largest land animal?",
      choices: ["Elephant", "Giraffe", "Hippo", "Rhino"],
      correctAnswer: "Elephant"
    },
    {
      question: "Who discovered the structure of DNA?",
      choices: ["Marie Curie", "Isaac Newton", "Watson and Crick", "Louis Pasteur"],
      correctAnswer: "Watson and Crick"
    },
    {
      question: "What is the capital of Russia?",
      choices: ["Saint Petersburg", "Novosibirsk", "Moscow", "Kazan"],
      correctAnswer: "Moscow"
    }
  ];


export default generalExam
  