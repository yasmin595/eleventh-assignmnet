import React from 'react';

const QnAPage = () => {
    const faqs = [
        {
            question: " What is WhereIsIt?",
            answer: "WhereIsIt is a Lost & Found platform where users can post and search for lost or found items. It's a community-driven initiative to help return lost belongings to their rightful owners."
        },
        {
            question: " Do I need an account to post items?",
            answer: "Yes. You must create an account or log in using your email to post lost or found items. This ensures accountability and helps in tracking communication."
        },
        {
            question: " How can I contact someone who posted an item?",
            answer: "Once you're logged in, you can view the item's details and contact the user via the provided email or system-based messaging (if available)."
        },
        {
            question: " Can I update or delete a post after publishing?",
            answer: "Yes. If you're the one who posted the item, you can edit or remove the post from your dashboard or profile page."
        },
        {
            question: " What kind of items can I post?",
            answer: "You can post any personal belongings such as bags, mobile phones, pets, documents, gadgets, and more. Ensure your post is appropriate and not spammy."
        },
        {
            question: " How do I ensure my post gets more visibility?",
            answer: "Add a clear title, relevant category, real image, and detailed description. The more accurate your info, the more helpful it becomes for others."
        },
        {
            question: " What happens after I recover my item?",
            answer: "Once recovered, we recommend updating the item status to 'Recovered' or removing the post to keep the platform clean and updated."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-base-200 p-6 rounded-lg shadow hover:bg-green-700 transition duration-300 group"
                    >
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{faq.question}</h3>
                        <p className="text-gray-700 group-hover:text-white">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QnAPage;
