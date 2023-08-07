import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import questionsData from '../questions.json';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const SendFeedBackForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [auth, setAuth] = useState(null);
  const [db, setDb] = useState(null);
  const questions = questionsData;
  const totalQuestions = questions.length;

  useEffect(() => {
    setAuth(getAuth());
    setDb(getFirestore());
  }, []);

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => Math.min(prevQuestion + 1, totalQuestions - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleSkip = () => {
    setCurrentQuestion((prevQuestion) => Math.min(prevQuestion + 1, totalQuestions));
  };

  const getProgressText = () => {
    return `${currentQuestion + 1}/${totalQuestions}`;
  };

  const handleSubmit = (values) => {
    const userId = auth.currentUser.uid;
    const feedback = {
      userId,
      questions: questions.map((question) => ({
        id: question.id,
        label: question.label,
        type: question.type,
        value: values[question.id],
      })),
    };

    setDoc(doc(db, 'feedback', userId), feedback)
      .then(() => {
        alert('Feedback sent successfully');
      }
    )
      .catch((error) => {
        console.error('Error writing document: ', error);
      }
    );
  };

  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div>
      <h2>Feedback Form</h2>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor={questions[currentQuestion].id}>{questions[currentQuestion].label}</label>
            {questions[currentQuestion].type === 'scale' ? (
              <Field as="select" name={questions[currentQuestion].id} required={questions[currentQuestion].required}>
                <option value="" disabled>
                  Select an option
                </option>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Field>
            ) : questions[currentQuestion].type === 'multipleChoice' ? (
              <Field as="select" name={questions[currentQuestion].id} required={questions[currentQuestion].required}>
                <option value="" disabled>
                  Select an option
                </option>
                {questions[currentQuestion].options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            ) : (
              <Field as="textarea" name={questions[currentQuestion].id} required={questions[currentQuestion].required} />
            )}
          </div>
          <div>
            <button type="button" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            {isLastQuestion ? (
              <button type="submit">Submit</button>
            ) : (
              <>
                <button type="button" onClick={handleSkip} disabled={currentQuestion === totalQuestions - 1}>
                  Skip
                </button>
                <button type="button" onClick={handleNext} disabled={currentQuestion === totalQuestions - 1}>
                  Next
                </button>
              </>
            )}
          </div>
          <div>Progress: {getProgressText()}</div>
        </Form>
      </Formik>
    </div>
  );
};

export default SendFeedBackForm;
