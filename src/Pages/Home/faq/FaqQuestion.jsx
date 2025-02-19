import React, { useState } from 'react';

const FaqQuestion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does Tech Product Hunt work?",
            answer: "Tech Product Hunt is a platform where users can discover and share new tech products. You can view products, submit reviews, and engage in discussions with other users."
        },
        {
            question: "How are trending products selected?",
            answer: "Trending products are selected based on user voting and discussions. The top products are highlighted daily."
        },
        {
            question: "How can I submit a review?",
            answer: "To submit a review, navigate to the product page and click the 'Write a Review' button. There you can share your experience."
        },
        {
            question: "Can I suggest a product to be featured?",
            answer: "Yes, you can suggest products by using the 'Suggest a Product' feature available on our platform. Your suggestion will be reviewed by our team."
        },
        {
            question: "Is there a mobile app for Tech Product Hunt?",
            answer: "Currently, there is no dedicated mobile app, but you can access the platform via any mobile browser."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team by visiting the 'Contact Us' page on our website and filling out the support form."
        }
    ];

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">Common Questions About Tech Product Hunt</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded mb-2">
                    <button
                        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition duration-200"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-50 border-t border-gray-300">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqQuestion;
