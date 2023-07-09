import React, { useState } from 'react';

export default function FAQ() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const items = [
    {
      title: 'How do I participate in the referral program?',
      content: 'Content for Item 1',
    },
    {
      title: 'What are the requirements to receive a reward?',
      content: 'Content for Item 2',
    },
    {
      title: 'How much of a reward can I receive?',
      content: 'Content for Item 2',
    },
    {
      title: 'How long will I receive rewards for my referrals?',
      content: 'Content for Item 2',
    },
    {
      title: 'Can I refer multiple users?',
      content: 'Content for Item 2',
    },
    // Add more items as needed
  ];

  return (
    <div className="faq">
      <div className="mx-auto pl-32 pr-32 pt-16 pb-32" style={{width: "70%"}}>
      <h3 className="text-md md:text-2xl lg:text-4xl text-center mb-4">FAQ</h3>
      {items.map((item, index) => (
        <div key={index} className="faq-items shadow-md rounded-lg mb-4">
          <div
            className="flex items-center justify-between p-3 cursor-pointer"
            onClick={() => handleItemClick(index)}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                index === activeItem ? 'transform rotate-180' : ''
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 8l4 4 4-4"
              />
            </svg>
          </div>
          {index === activeItem && (
            <div className="p-3">{item.content}</div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}

