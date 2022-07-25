import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useTestEvaluationFormsQuery } from '../generated';

const TestFormPage = () => {
  const formState = { question1: '', question2: '' };

  const { data } = useTestEvaluationFormsQuery();

  function updateFormState(key, value) {
    formState[key] = value;
  }

  const CREATE_FORM = gql`
    mutation createTestEvaluationForm(
      $question1: String!
      $question2: String!
    ) {
      createTestEvaluationFormInput(
        question1: $question1
        question2: $question2
      ) {
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

  const [submitForm, { loading, error }] = useMutation(CREATE_FORM);
  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! ${error.message}</>;

  async function submitNewForm() {
    try {
      await data.graphql({
        query: CREATE_FORM,
        variables: {
          input: {
            question1: formState.question1,
            question2: formState.question2,
          },
        },
      });
      console.log('New form created!');
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div className="text-center bg-slate-100">
      <div>
        <h1>Test Form</h1>
        <p>Test test test</p>
      </div>

      <div>
        <form>
          <p>
            Do you currently carry products from this producer at your place of
            work?
          </p>
          <input
            type="text"
            onChange={(e) => updateFormState('question1', e.target.value)}
            className="outline"
            required
          />
          <p>
            If so, which products? Be sure to note if you sell this specific
            product.
          </p>
          <div className="d-flex align-items-center overflow-hidden">
            <input
              type="text"
              onChange={(e) => updateFormState('question2', e.target.value)}
              className="outline"
              required
            />
            <br />
            <button
              className="bg-slate-400"
              type="submit"
              onClick={submitNewForm}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestFormPage;

// import React, { useState } from 'react';
// import { gql, useMutation } from '@apollo/client';

// type Props = {};

// const TestFormPage = (props: Props) => {
//   const [question1, setQuestion1] = useState('');
//   const [question2, setQuestion2] = useState('');
//   const formState = { question1: '', question2: '' };

//   function updateFormState(key: {}, value: {}) {
//     formState[key] = value;
//   }

//   const CREATE_FORM = gql`
//     mutation createTestEvaluationForm(
//       $question1: String!
//       $question2: String!
//     ) {
//       createTestEvaluationFormInput
//         @rest(
//           type: "openExchangeRates"
//           path: "/latest"
//           endpoint: "openExchangeRate"
//           question1: $question1
//           question2: $question2
//         ) {
//         data {
//           id
//           attributes {
//             question1
//             question2
//           }
//         }
//       }
//     }
//   `;

//   const [submitForm, { data, loading, error }] = useMutation(CREATE_FORM);
//   if (loading) return <>Submitting...</>;
//   if (error) return <>Submission error! ${error.message}</>;

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     // call the create page mutate function
//     await submitForm({ variables: { question1, question2 } });
//   };

//   async function submitNewForm() {
//     try {
//       await API.graphql({
//         query: createContact,
//         variables: {
//           input: {
//             name: formState.name,
//             phone: formState,phone
//           }
//         }
//       })
//       console.log('New contact created!');
//     } catch (err) {
//       console.log({ err });
//     }
//   }

//   return (
//     <div className="text-center bg-slate-100">
//       <div>
//         <h1>Test Form</h1>
//         <p>Test test test</p>
//       </div>

//       <div>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <p>
//             Do you currently carry products from this producer at your place of
//             work?
//           </p>
//           <input type="text" value={question1} className="outline" required />
//           <p>
//             If so, which products? Be sure to note if you sell this specific
//             product.
//           </p>
//           <div className="d-flex align-items-center overflow-hidden">
//             <input
//               type="text"
//               onChange={(e) => updateFormState('phone', e.target.value)}
//               className="outline"
//               required
//             />
//             <br />
//             <button className="bg-slate-400" type="submit">
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TestFormPage;
