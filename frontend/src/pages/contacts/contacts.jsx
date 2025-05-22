import React, { useState } from 'react';
import "./contacts.css";
import { FaSearch, FaChevronDown, FaChevronUp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2'

const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock FAQ data - you can move this to a separate file later
  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a wide range of cybersecurity courses including Ethical Hacking, Network Security, Web Security, and more.",
      category: "Courses"
    },
    {
      question: "How long are the courses?",
      answer: "Course duration varies from 4 weeks to 16 weeks depending on the program you choose.",
      category: "Courses"
    },
    {
      question: "Do you provide certification?",
      answer: "Yes, upon successful completion of the course, you will receive an industry-recognized certification.",
      category: "Certification"
    },
    {
      question: "What are the payment options?",
      answer: "We accept various payment methods including credit/debit cards, net banking.",
      category: "Payment"
    }
  ];
  
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const toggleFaq = (index) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3833aaac-9a8b-4b49-91ed-0b175bfffa2c");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent Successfully",
          icon: "success"
        });
      }
    };
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our courses, workshops, and cybersecurity training programs.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          {filteredFaqs.length > 0 ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFaqId === index ? (
                      <FaChevronUp className="text-blue-600" />
                    ) : (
                      <FaChevronDown className="text-blue-600" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFaqId === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any FAQs matching your search criteria.
              </p>
              <button 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
        
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6">
                If you couldn't find the answer to your question, please don't hesitate to contact our support team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <span>info@vhass.in</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-3" />
                  <span>+91 8985320226</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type='email'
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name='email'
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    name='message'
                    placeholder="Your question"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;