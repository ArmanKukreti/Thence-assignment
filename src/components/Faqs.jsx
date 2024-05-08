import React, { useState } from 'react';
import EditableInput from './EditableInput';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: 'Do you offer freelancers?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    },
    {
      question: 'What’s the guarantee that I will be satisfied with the hired talent?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    },
    {
      question: 'Can I hire multiple talents at once?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    },
    {
      question: 'Why should I not go to an agency directly?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      question: 'Who can help me pick a right skillset and duration for me?',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    },
  ];

  function toggle(i) {
    setActiveIndex(activeIndex === i ? null : i);
  }

  return (
    <div className="faqsDiv">
      <div className="faqsLeftSection">
        <div className="faqsHeader">
          <EditableInput className={'faqsQuote'} value={'What’s on your mind'} />
          <EditableInput className={'faqDesc'} value="Ask Questions" />
        </div>
      </div>
      <div className="faqsRightSection">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <EditableInput className={`question ${i}`} value={item.question} img={activeIndex === i ? '-' : '+'} />
              </div>

              {activeIndex === i && (
                <div className="content">
                  <EditableInput className={`answer ${i}`} value={item.answer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
