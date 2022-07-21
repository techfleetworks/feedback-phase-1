import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

type Props = {};

const TestFormPage = (props: Props) => {
  const [question1] = useState('');
  const [question2] = useState('');

  const CREATE_FORM = gql`
    mutation createTestEvaluationForm($input: [createTestEvaluationFormInput]) {
      createTestEvaluationFormInput(input: $input) {
        data {
          id
          attributes {
            question1
            question2
          }
        }
      }
    }
  `;

  const [submitForm, { data, loading, error }] = useMutation(CREATE_FORM);
  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // call the create page mutate function
    await submitForm({ variables: { question1, question2 } });
  };

  return (
    <div className="text-center bg-slate-100">
      <div>
        <h1>Test Form</h1>
        <p>Test test test</p>
      </div>

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            Do you currently carry products from this producer at your place of
            work?
          </p>
          <input type="text" value={question1} className="outline" required />
          <p>
            If so, which products? Be sure to note if you sell this specific
            product.
          </p>
          <div className="d-flex align-items-center overflow-hidden">
            <input type="text" value={question2} className="outline" required />
            <br />
            <button className="bg-slate-400" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestFormPage;
