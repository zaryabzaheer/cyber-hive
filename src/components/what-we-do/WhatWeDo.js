import { useState } from 'react';

const accordionData = [
    {
        title: 'Smart Contract Review and Audit',
        content:
            'Cyberattacks continue to pose significant threats, causing billions of dollars in financial losses globally each year. reputational damage and potential legal consequences as a result of data breaches and other cybersecurity incidents.',
    },
    {
        title: 'Development Skills',
        content:
            'Development of mail servers\nPHP\nJavaScript\nMySQL\nDevelopment of parsers for different websites\nSetting up notifications for messengers (Telegram, etc.)',
    },
    {
        title: 'DevOps',
        content:
            'Cyberattacks continue to pose significant threats, causing billions of dollars in financial losses globally each year. reputational damage and potential legal consequences as a result of data breaches and other cybersecurity incidents.',
    },
    {
        title: 'What do we check during the penetration testing',
        content:
            'Cyberattacks continue to pose significant threats, causing billions of dollars in financial losses globally each year. reputational damage and potential legal consequences as a result of data breaches and other cybersecurity incidents.',
    },
    {
        title: 'Cybersecurity',
        content:
            'Cyberattacks continue to pose significant threats, causing billions of dollars in financial losses globally each year. reputational damage and potential legal consequences as a result of data breaches and other cybersecurity incidents.',
    },
];

const WhatWeDo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="what-we-do">
            <div className="container-fluid container-width">
                <div
                    className="what-we-do-heading text-center"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <h2 className="mb-0">What we do.<span>?</span></h2>
                </div>
                <div
                    className="what-we-do-accordion"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="300"
                >
                    <div className="accordion" id="accordionExample">
                        {accordionData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button accordion-button${index === activeIndex ? ' active' : ''}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={index === activeIndex ? 'true' : 'false'}
                                        aria-controls={`collapse${index}`}
                                    >
                                        {item.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse${index === activeIndex ? ' show' : ''}`}
                                    aria-labelledby={`heading${index}`}
                                    data-parent="#accordionExample"
                                >
                                    <div className="accordion-body">{item.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
