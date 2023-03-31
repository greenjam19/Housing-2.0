import React, { useState } from 'react';
import { ProgressBar, Form, Button } from 'react-bootstrap';

const RoommatePairing = ({ hidden }) => {
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: "What's your living style?",
      choices: ["Neat and tidy", "Relaxed and casual", "A bit of both"]
    },
    {
      text: "What time do you usually wake up?",
      choices: ["Early bird", "Night owl", "It varies"]
    },
    {
        text: "What's your favorite food?",
        choices: ["Chinese", "Japanese", "Korean", "Western", "Indian", "Thai", "Vietnamese", "Other"]
    },
    {
        text: "What's your favorite drink?",
        choices: ["Coffee", "Tea", "Juice", "Milk", "Water", "Other"]
    }
    // Add 10 more questions here
  ];

  const handleAnswer = (answer) => {
    setProgress(progress + 1);
    setAnswers([...answers.slice(0, progress), answer]);
    const radios = document.getElementsByName('answer');
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;

    }
  };

  const handleRedo = () => {
    setProgress(0);
    setAnswers([]);
  };

  const currentQuestion = questions[progress];
  return (
      <div hidden={hidden} className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="progress mt-2 mb-2">
              <div
                  className="progress-bar"
                  role="progressbar"
                  style={{width: `${(progress / questions.length) * 100}%`}}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax={questions.length}
              ></div>
            </div>
            {currentQuestion && (
                <Form>
                  <Form.Group>
                    <Form.Label>{currentQuestion.text}</Form.Label>
                    {currentQuestion.choices.map((choice) => (
                        <Form.Check
                            type="radio"
                            label={choice}
                            name="answer"
                            onChange={() => handleAnswer(choice)}
                        />
                    ))}
                  </Form.Group>
                </Form>
            )}
            <Button onClick={handleRedo} variant="primary">Redo</Button>
          </div>
        </div>
      </div>
  );
};

export default RoommatePairing;