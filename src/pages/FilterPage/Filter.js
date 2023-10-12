import React, { useState } from 'react';
import Question from '../../components/filter/Question/Question';
import Question2 from '../../components/filter/Question2/Question2';
import Question3 from '../../components/filter/Question3/Question3';
import Question4 from '../../components/filter/Question4/Question4';
import Question5 from '../../components/filter/Question5/Question5';

const FilterPage = () => {

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const handleNextQuestion = (answer) => {
        // Logic to determine which question to show next based on the answer or selected option
        if (currentQuestion === 1) {
          setCurrentQuestion(answer === 'yes' ? 2 : 3);
        } else if (currentQuestion === 2) {
          setCurrentQuestion(3);
        } else if (currentQuestion === 3) {
          setCurrentQuestion(4);
        } else if (currentQuestion === 4) {
          // Transition from Question4 to Question5 based on the selected option
          setCurrentQuestion(5);
        } else {
          // Handle other conditions or questions
        }
      };
    
      return (
        <div>
          {currentQuestion === 1 && <Question onNextQuestion={handleNextQuestion} />}
          {currentQuestion === 2 && <Question2 onNextQuestion={handleNextQuestion} />}
          {currentQuestion === 3 && <Question3 onNextQuestion={handleNextQuestion} />}
          {currentQuestion === 4 && <Question4 onNextQuestion={handleNextQuestion} />}
          {currentQuestion === 5 && <Question5 />}
          {/* Add more conditions for additional questions if needed */}
        </div>
      );
    };

export default FilterPage;