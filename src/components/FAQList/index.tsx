import { FC, useState } from 'react';
import '@src/styles/components/FAQList/index.scss';
import { ArrowButton } from '@src/components/Icons/ArrowButton';

export const FAQList: FC = () => {
  const FAQs = [
    {question: "Batabit me permite hacer compras en su plataforma?", answer: "No.Batabit es una plataforma exclusivamente para consulta de información y toma de decisiones. Todavía no ofrecemos servicios de compra o venta."},
    {question: "Qué es Bitcoin?", answer: "qwe"},
    {question: "Cómo puedo realizar una transacción en bitcoins?", answer: "qwe"},
    {question: "Cómo aseguro mis compras?", answer: "qwe"}
  ]
    ;
  const [questionSelected, setQuestionSelected] = useState<string>();
  return(
    <ul className='FAQList'>
      {FAQs.map(question => (
        <div key={question.question} onClick={() => 
          questionSelected == question.question
          ? setQuestionSelected('')
          : setQuestionSelected(`${question.question}`)}>
          <li>
              <span>{question.question}</span>
              <ArrowButton color="#201E1C" rotate='bottom'/>
          </li>
          {questionSelected == question.question && <p>{question.answer}</p>}
        </div>
      ))}
    </ul>
  );
};

