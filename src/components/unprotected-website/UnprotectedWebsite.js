'use client'
import { useState } from "react";
import Image from "next/image";
import { Images } from "@/assets/assets";

const questions = [
    {
        question: "Does your organization have a documented cybersecurity policy?",
        options: ["No", "Yes", "Partially"],
    },
    {
        question: "Do you regularly update your software and systems to patch security vulnerabilities?",
        options: ["No", "Yes", "Not sure"],
    },
    {
        question: "Are all employee devices protected with antivirus and antimalware software?",
        options: ["No", "Yes", "Some devices"],
    },
    {
        question: "Do you conduct regular cybersecurity awareness training for employees?",
        options: ["No", "Yes", "Only for some departments"],
    },
    {
        question: "Is multi-factor authentication (MFA) enabled for accessing critical systems?",
        options: ["No", "Yes", "Only for some systems"],
    },
    {
        question: "Do you perform regular backups of critical data?",
        options: ["No", "Yes", "Not regularly"],
    },
    {
        question: "Does your organization have an incident response plan in place?",
        options: ["No", "Yes", "In development"],
    },
    {
        question: "Do you encrypt sensitive data both in transit and at rest?",
        options: ["No", "Yes", "Not sure"],
    },
    {
        question: "Are external vendors and contractors subject to cybersecurity assessments?",
        options: ["No", "Yes", "Sometimes"],
    },
    {
        question: "Do you conduct regular cybersecurity audits and assessments?",
        options: ["No", "Yes", "Not regularly"],
    },
];

const UnprotectedWebsite = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleAnswerSelect = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
        setNextButtonDisabled(false);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setNextButtonDisabled(true);
        } else {
            setSubmitClicked(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setAnswers(Array(questions.length).fill(null));
        setNextButtonDisabled(true);
        setSubmitClicked(false);
    };

    const handleSubmit = () => {
        console.log("All answers:", answers);
    };

    return (
        <section className="unprotected-website">
            <div className="container-fluid container-width">
                <div className="row">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="unprotected-website-content">
                            <h3>Unprotected website a magnet for cybercriminals</h3>
                            <ul className="p-0">
                                <li className="d-flex align-items-center">
                                    <div className="unprotected-website-content-img">
                                        <Image src={Images.unprotectedIconOne} className="img-fluid" alt="unprotected icons" />
                                    </div>
                                    <p className="mb-0">Test his own hacking skills</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="unprotected-website-content-img">
                                        <Image src={Images.unprotectedIconTwo} className="img-fluid" alt="unprotected icons" />
                                    </div>
                                    <p className="mb-0">Use the website to commit large attacks</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="unprotected-website-content-img">
                                        <Image src={Images.unprotectedIconThree} className="img-fluid" alt="unprotected icons" />
                                    </div>
                                    <p className="mb-0">Get the benefit</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="unprotected-website-content-img">
                                        <Image src={Images.unprotectedIconFour} className="img-fluid" alt="unprotected icons" />
                                    </div>
                                    <p className="mb-0">Eliminate a competitor</p>
                                </li>
                            </ul>
                            <button className="btn-filled"><span>PROTECT YOUR WEBSITE</span></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="unprotected-website-form-area">
                            <div className="unprotected-website-form-area-heading-content d-flex justify-content-between">
                                <h3>{questions[currentQuestion].question}</h3>
                                <h3 className="count-text">
                                    <span>{currentQuestion + 1}</span>/{questions.length}
                                </h3>
                            </div>
                            <div className="unprotected-website-form-area-conditions d-flex align-items-center">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(option)}
                                        className={`btn ${answers[currentQuestion] === option ? "selected" : ""}`}
                                        disabled={submitClicked}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <div className="unprotected-website-form-area-last-info d-flex align-items-center justify-content-between">
                                <a className="d-flex align-items-center" onClick={handlePreviousQuestion}>
                                    <div className="back-arrow-left-icon me-2">
                                        <Image src={Images.arrowLeft} className="img-fluid" alt="arrow left" width="100%" />
                                    </div>
                                    GO BACK
                                </a>
                                {submitClicked ? (
                                    <button className="btn btn-filled mb-sm-0 mb-3" onClick={handleSubmit}>
                                        <span>SUBMIT</span>
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-filled mb-sm-0 mb-3"
                                        onClick={handleNextQuestion}
                                        disabled={nextButtonDisabled}
                                    >
                                        <span>NEXT QUESTION</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnprotectedWebsite;