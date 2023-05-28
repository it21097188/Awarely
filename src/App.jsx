import { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is phishing?',
			answerOptions: [
				{ answerText: 'A type of fish', isCorrect: false },
				{ answerText: 'A social engineering attack that tricks users into revealing sensitive information', isCorrect: true },
				{ answerText: 'A type of virus that spreads through email with the purpose of spreading into networks', isCorrect: false },
				{ answerText: 'A type of encryption that protects users from social engineering attacks', isCorrect: false },
			],
		},
		{
			questionText: 'What is a firewall?',
			answerOptions: [
				{ answerText: 'A type of computer hardware', isCorrect: false },
				{ answerText: 'A network security system that monitors and controls incoming and outgoing network traffic', isCorrect: true },
				{ answerText: 'A type of password', isCorrect: false },
				{ answerText: 'A type of software that scans for viruses', isCorrect: false },
			],
		},
		{
			questionText: 'What is multi-factor authentication?',
			answerOptions: [
				{ answerText: 'A security system that uses more than one password', isCorrect: false },
				{ answerText: 'A security system that requires two or more forms of authentication to access a system or service', isCorrect: true },
				{ answerText: 'A security system that uses biometric data as a password', isCorrect: false },
				{ answerText: 'A security system that requires users to change their password frequently', isCorrect: false },
			],
		},
		{
			questionText: 'How does a VPN work?',
			answerOptions: [
				{ answerText: 'It is a type of virus', isCorrect: false },
				{ answerText: 'It network security system that encrypts and anonymizes internet traffic', isCorrect: true },
				{ answerText: 'It is a type of hardware firewall', isCorrect: false },
				{ answerText: 'It is a type of software that scans for vulnerabilities', isCorrect: false },
			],
		},
		{
			questionText: 'How does encryption work?',
			answerOptions: [
				{ answerText: 'It hides data in plain sight', isCorrect: false },
				{ answerText: 'It converts plain text into coded text that can only be read with the correct key', isCorrect: true },
				{ answerText: 'It scrambles data so that it can be accessed by anyone', isCorrect: false },
				{ answerText: 'It compresses data to reduce its size', isCorrect: false },
			],
		},
		{
			questionText: 'Why is it important to use strong passwords?',
			answerOptions: [
				{ answerText: 'To impress your friends with your password creativity', isCorrect: false },
				{ answerText: 'To make it more difficult for hackers to guess or crack your password', isCorrect: true },
				{ answerText: 'To make it easier for you to remember your password', isCorrect: false },
				{ answerText: 'To help prevent malware from infecting your device', isCorrect: false },
			],
		},
		{
			questionText: 'What is a denial-of-service (DoS) attack and how does it work?',
			answerOptions: [
				{ answerText: 'It is a type of virus that infects networks', isCorrect: false },
				{ answerText: 'It is an attack that overwhelms a network or server with traffic, causing it to become unavailable', isCorrect: true },
				{ answerText: 'It is a method of stealing sensitive information from a network', isCorrect: false },
				{ answerText: 'It is a type of phishing attack that tricks users into clicking on a link', isCorrect: false },
			],
		},
		{
			questionText: 'How does a man-in-the-middle attack work?',
			answerOptions: [
				{ answerText: 'It involves stealing someone\'s identity', isCorrect: false },
				{ answerText: 'It is an attack that intercepts communication between two parties and alters the messages being sent', isCorrect: true },
				{ answerText: 'It is a type of phishing attack that uses social engineering to trick users into divulging sensitive information', isCorrect: false },
				{ answerText: 'It is an attack that floods a network or server with traffic, causing it to become unavailable', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of a physical security measure?',
			answerOptions: [
				{ answerText: 'Firewall', isCorrect: false },
				{ answerText: 'Encryption', isCorrect: false },
				{ answerText: 'Security cameras', isCorrect: true },
				{ answerText: 'Multi-factor authentication', isCorrect: false },
			],
		},
		{
			questionText: 'What is the purpose of a honeypot?',
			answerOptions: [
				{ answerText: 'To trap bees', isCorrect: false },
				{ answerText: 'To lure attackers into a trap and gather information about their methods', isCorrect: true },
				{ answerText: 'To encrypt sensitive data', isCorrect: false },
				{ answerText: 'To prevent malware from infecting a device', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a common authentication factor?',
			answerOptions: [
				{ answerText: 'Something you know', isCorrect: true },
				{ answerText: 'Something you are', isCorrect: false },
				{ answerText: 'Something you do', isCorrect: false },
				{ answerText: 'Something you have', isCorrect: false },
			],
		},
		{
			questionText: 'What is the purpose of a virtual machine?',
			answerOptions: [
				{ answerText: 'To create a physical copy of a computer', isCorrect: false },
				{ answerText: 'To run multiple operating systems on the same physical computer', isCorrect: true },
				{ answerText: 'To prevent unauthorized access to a network', isCorrect: false },
				{ answerText: 'To encrypt sensitive data', isCorrect: false },
			],
		},
		{
			questionText: 'What is the purpose of a patch?',
			answerOptions: [
				{ answerText: 'To prevent malware from infecting a device', isCorrect: false },
				{ answerText: 'To improve the performance of a computer system', isCorrect: false },
				{ answerText: 'To fix security vulnerabilities in software', isCorrect: true },
				{ answerText: 'To encrypt sensitive data', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of a social engineering attack?',
			answerOptions: [
				{ answerText: 'Denial-of-service attack', isCorrect: false },
				{ answerText: 'Man-in-the-middle attack', isCorrect: false },
				{ answerText: 'Phishing attack', isCorrect: true },
				{ answerText: 'Virus attack', isCorrect: false },
			],
		},
		{
			questionText: 'What is the purpose of a security audit?',
			answerOptions: [
				{ answerText: 'To test the performance of a computer system', isCorrect: false },
				{ answerText: 'To ensure compliance with security policies and regulations', isCorrect: true },
				{ answerText: 'To encrypt sensitive data', isCorrect: false },
				{ answerText: 'To prevent malware from infecting a device', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
