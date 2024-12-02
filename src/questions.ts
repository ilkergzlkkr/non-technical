export type Question = {
  question: string;
  choices: string[];
  answer: string;
};

export const questions = [
  {
    question:
      "Which of the following is NOT one of the non-technical abilities that every engineer should have?",
    choices: [
      "A) Communication Skills",
      "B) Time Management",
      "C) Knowledge of Programming Languages",
      "D) Emotional Intelligence",
    ],
    answer: "C",
  },
  {
    question: "Which is not a method for measuring situational awareness?",
    choices: [
      "A) SART",
      "B) SAGAT",
      "C) Eye Tracking",
      "D) Kilometers",
      "E) Applications in simulators",
    ],
    answer: "D",
  },
  {
    question:
      "What are the three fundamental components of situation awareness?",
    choices: [
      "A) Gathering information, interpreting information, anticipating future states",
      "B) Planning, tracking, evaluating",
      "C) Communicating, collaborating, managing",
      "D) Analyzing, planning, implementing",
      "E) Observing, reacting, executing",
    ],
    answer: "A",
  },
  {
    question:
      "Which type of memory serves as the largest and most permanent store of information?",
    choices: [
      "A) Working memory",
      "B) Sensory memory",
      "C) Long-term memory",
      "D) Short-term memory",
      "E) Iconic memory",
    ],
    answer: "C",
  },
  {
    question:
      "Which system helps the brain gather information from the environment?",
    choices: [
      "A) Digestive system",
      "B) Sensory system",
      "C) Circulatory system",
      "D) Nervous system",
    ],
    answer: "B",
  },
  {
    question:
      "According to Endsley (1995), situation awareness is considered the first stage in which process?",
    choices: [
      "A) Problem-solving",
      "B) Decision-making",
      "C) Communication",
      "D) Teamwork",
      "E) Risk assessment",
    ],
    answer: "B",
  },
  {
    question: "Which is not a result of situational awareness?",
    choices: [
      "A) Improves performance",
      "B) Reduces errors",
      "C) Aids decision-making in high-stakes",
      "D) Causes safety problems",
    ],
    answer: "D",
  },
  {
    question: "How can stimulants like caffeine affect situational awareness?",
    choices: [
      "A) They decrease focus",
      "B) They enhance focus and help counter fatigue",
      "C) They increase memory retention",
      "D) They have no effect on situational awareness",
    ],
    answer: "B",
  },
  {
    question: 'What happens when a person\'s "cognitive jug" is full?',
    choices: [
      "A) They become more efficient at multitasking",
      "B) Their ability to process or retain new information decreases",
      "C) They experience heightened clarity and focus",
      "D) Their memory and learning capacity improve significantly",
      "E) They develop better problem-solving skills",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a positive indicator of Situation Awareness Behaviors?",
    choices: [
      "A) Scanning the environment regularly.",
      "B) Increasing monitoring based on patient condition.",
      "C) Staying proactive by adjusting treatments.",
      "D) Communicating effectively with the team.",
      "E) Ignoring changes in patient state.",
    ],
    answer: "E",
  },
  {
    question:
      "Which type of memory in situational awareness is responsible for holding and processing information temporarily for immediate tasks, such as reasoning and decision-making?",
    choices: [
      "A) Sensory Memory",
      "B) Long-Term Memory",
      "C) Short-Term Memory (Working Memory)",
      "D) Procedural Memory",
    ],
    answer: "C",
  },
  {
    question: "What does NDM stand for?",
    choices: [
      "A) National Decision-Making",
      "B) Natural Desicion-Making",
      "C) Name of Desicion-Making",
      "D) Naturalistic Desicion-Making",
      "E) Number of Desicion-Making",
    ],
    answer: "D",
  },
  {
    question: "What is the main purpose of Tactical Decision Games (TDG)?",
    choices: [
      "A) To teach decision-makers team communication skills.",
      "B) To enhance participants' ability to make quick decisions and evaluate options.",
      "C) To raise awareness about stress management among employees.",
      "D) To increase decision-makers' motivation in the workplace.",
      "E) To develop physical resilience in high-risk professions.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a step in the decision-making process?",
    choices: [
      "A) Situation assessment.",
      "B) Generating one or more response options.",
      "C) Selecting and implementing an option.",
      "D) Outcome review",
      "E) Making a random decision",
    ],
    answer: "E",
  },
  {
    question:
      "Rule-based decisions are advantageous as they provide clear actions for novices to follow without understanding each step. However, they also have several limitations. Which of the following are potential drawbacks of relying solely on rule-based decisions?",
    choices: [
      "A) They guarantee rapid and justifiable choices at all times, regardless of the situation.",
      "B) They can be time-consuming if the user needs to refer to manuals and can cause skill decay over time.",
      "C) They are foolproof and ensure that all steps are completed even if the task is interrupted.",
      "D) They inherently keep procedures current and accurate, adapting automatically to new information.",
    ],
    answer: "B",
  },
  {
    question: "Which one is not a step of problem understood?",
    choices: [
      "A) Rule available",
      "B) Multiple tasks to do",
      "C) Gather more information",
      "D) No options available",
      "E) Multiple options available",
    ],
    answer: "C",
  },
  {
    question:
      'Which level in the RPD (Recognition-primed Decision) model involves a "mental simulation" to foresee any potential problems with a course of action?',
    choices: [
      "A) Level 1 (Simple Match)",
      "B) Level 2 (Diagnosis)",
      "C) Level 3 (Evaluation)",
      "D) Level 4 (Risk Assessment)",
    ],
    answer: "C",
  },
  {
    question: "Which one is NOT a step of DODAR?",
    choices: [
      "A) Diagnosis",
      "B) Review",
      "C) Decision",
      "D) Assign Tasks",
      "E) Organization",
    ],
    answer: "E",
  },
  {
    question:
      "Which of the following is NOT an advantage of Choice Decisions? buğra soru",
    choices: [
      "A) More likely to produce an optimal solution",
      "B) Fully compares alternative courses of action",
      "C) Not suited to noisy environments",
      "D) Can be justified",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is the primary focus of naturalistic decision-making (NDM) in high-risk environments?",
    choices: [
      "A) To identify optimal decision-making solutions using complex mathematical models",
      "B) To describe how experts make decisions under conditions of high uncertainty, time pressure, and risk",
      "C) To apply classical decision theory in uncertain and time-pressured settings",
      "D) To use laboratory-based research to analyze decision-making in controlled environments",
      "E) To rely on rules and analysis of options without considering situational assessment",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary benefit of storytelling in high-risk workplaces?",
    choices: [
      "A) It improves physical endurance for challenging tasks.",
      "B) It formalizes teamwork strategies in professional settings.",
      "C) It allows professionals to share experiences and enhance decision-making expertise.",
      "D) It replaces traditional training methods with casual conversations.",
      "E) It reduces stress by promoting light-hearted communication among employees.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following decision-making methods is based on following a set of rules or checklists?",
    choices: [
      "A) Recognition-Primed Decision-Making (RPD)",
      "B) Rule-Based Decision-Making",
      "C) Choice-Based Decision-Making",
      "D) Creative Decision-Making",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following statements best describes the main difference between Recognition-Prioritized Decision Making (RPD) and Rule-Based Decision Making?",
    choices: [
      "A) RPD is mainly used by novices, while Rule-Based Decision Making is mainly used by experts.",
      "B) RPD is faster and relies on experience, while Rule-Based Decision Making relies on applying specific rules and is slower.",
      "C) Rule-Based Decision Making is used in emergency situations, while RPD is used for routine tasks.",
      "D) Rule-Based Decision Making and RPD are both equally fast and effective in all situations.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following decision-making methods involves generating multiple options and comparing them to select the most suitable one?",
    choices: [
      "A) Recognition-Primed",
      "B) Rule-Based",
      "C) Choice through Comparison",
      "D) Creative",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is not one of the issues that should be taken into consideration when communicating?",
    choices: [
      "A) Use body language",
      "B) Do eye contact",
      "C) Use simple language",
      "D) Use facial expressions and mimics",
      "E) Use long and detailed sentences",
    ],
    answer: "E",
  },
  {
    question:
      "Which of the following is the most effective way for an engineer to communicate with non-technical stakeholders?",
    choices: [
      "A) Use technical jargon to showcase expertise.",
      "B) Present only the challenges without offering solutions.",
      "C) Simplify explanations and focus on the practical benefits.",
      "D) Avoid visuals to maintain focus on verbal explanations.",
      "E) Use lengthy, detailed descriptions in written communication.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is NOT a type of communication mentioned in the presentation?",
    choices: [
      "A) Verbal Communication",
      "B) Written Communication",
      "C) Telepathic Communication",
      "D) Non-verbal Communication",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following best describes how empathy enhances communication?",
    choices: [
      "A) By fostering deeper trust and understanding between individuals.",
      "B) By prioritizing logical reasoning over emotional connections.",
      "C) By eliminating the need for active listening.",
      "D) By creating hierarchical communication structures.",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following is the key element of successful teamwork?",
    choices: [
      "A) Good communication.",
      "B) Individual achievements.",
      "C) Similar personalities in the group.",
      "D) Competition among team members.",
    ],
    answer: "A",
  },
  {
    question: "Why is diversity considered important in organizations?",
    choices: [
      "A) It simplifies team communication.",
      "B) It ensures compliance with regulations.",
      "C) It fosters innovation and leads to better outcomes.",
      "D) It reduces the need for employee training.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is NOT a benefit of effective team communication?",
    choices: [
      "A) Facilitates information sharing and coordination.",
      "B) Prevents conflicts and promotes solution-focused approaches.",
      "C) Increases workload and stress among team members.",
      "D) Enhances trust and collaboration.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following strategies is incorrect for improving team dynamics?",
    choices: [
      "A) Building trust and respect among team members",
      "B) Using effective communication techniques",
      "C) Setting clear goals and expectations",
      "D) Putting personal interests before the team",
    ],
    answer: "D",
  },
  {
    question: "What is the definition of team working?",
    choices: [
      "A) Individuals competing to achieve personal goals.",
      "B) The process of individuals combining their skills and efforts to accomplish a shared objective.",
      "C) A group of people working independently on different tasks.",
      "D) Assigning tasks without collaboration.",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is NOT a key component of team working?",
    choices: [
      "A) Collaboration",
      "B) Shared goals",
      "C) Competition",
      "D) Interdependence",
    ],
    answer: "C",
  },
  {
    question: "Why is team working important in engineering?",
    choices: [
      "A) It reduces the need for innovation.",
      "B) It ensures faster project completion and improves outcomes.",
      "C) It eliminates individual responsibility.",
      "D) It allows team members to avoid challenges.",
    ],
    answer: "B",
  },
  {
    question: "What does Steve Jobs' quote emphasize about teamwork?",
    choices: [
      "A) It is more effective to work individually.",
      "B) Teamwork is not essential for success.",
      "C) Teams should always follow one leader.",
      "D) Great achievements are done by teams, not individuals.",
    ],
    answer: "D",
  },
  {
    question: "Which of these is a characteristic of effective teams?",
    choices: [
      "A) Open communication",
      "B) Undefined roles",
      "C) Relying on one person for all decisions",
      "D) Avoiding conflict",
    ],
    answer: "A",
  },
  {
    question:
      "Which role in a team is responsible for guiding vision and coordinating efforts?",
    choices: [
      "A) Implementers",
      "B) Problem solvers",
      "C) Leaders",
      "D) Creators",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary purpose of using digital tools like Slack and Trello in team working?",
    choices: [
      "A) To replace in-person meetings entirely.",
      "B) To track tasks and improve communication.",
      "C) To monitor individual performance secretly.",
      "D) To reduce the number of team members needed.",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is a common challenge in team working?",
    choices: [
      "A) Effective communication",
      "B) Shared goals",
      "C) Unequal participation",
      "D) Collaboration",
    ],
    answer: "C",
  },
  {
    question: "How can teams overcome miscommunication?",
    choices: [
      "A) Ignore communication gaps and proceed with the work.",
      "B) Rely on one person to communicate for everyone.",
      "C) Facilitate open dialogue and embrace diversity.",
      "D) Avoid check-ins to save time.",
    ],
    answer: "C",
  },
  {
    question:
      "Which famous project demonstrates the success of teamwork in engineering?",
    choices: [
      "A) The Eiffel Tower construction",
      "B) Solo engineering projects",
      "C) The Leaning Tower of Pisa",
      "D) Apollo 11 mission",
    ],
    answer: "D",
  },
  {
    question:
      "What is a key feature of teamwork that ensures members rely on each other to achieve shared goals?",
    choices: [
      "A) Adaptability",
      "B) Interdependence",
      "C) Innovation",
      "D) Knowledge Sharing",
    ],
    answer: "B",
  },
  {
    question: "How does technology improve communication within teams?",
    choices: [
      "A) It makes face-to-face meetings mandatory.",
      "B) It enables real-time communication across different locations.",
      "C) It eliminates the need for collaboration tools.",
      "D) It reduces the need for emails.",
    ],
    answer: "B",
  },
  {
    question: "What is the first step in building an effective team?",
    choices: [
      "A) Choose the Right Members",
      "B) Set Clear Goals",
      "C) Promote Collaboration",
      "D) Provide Support",
    ],
    answer: "B",
  },
  {
    question:
      "Which one of the following is not one stage of team development according to (Tuckman, 1965)?",
    choices: [
      "A) Forming",
      "B) Talking",
      "C) Storming",
      "D) Norming",
      "E) Performing",
    ],
    answer: "B",
  },
  {
    question:
      "What is the most effective approach to solving complex problems in engineering as a team?",
    choices: [
      "A) Breaking the problem into smaller, manageable parts and assigning tasks to team members",
      "B) Relying solely on past solutions without group discussion",
      "C) Assigning the entire problem to the most experienced team member",
      "D) Avoiding collaboration to reduce conflicting ideas",
    ],
    answer: "A",
  },
  {
    question: "How can technology improve teamwork in the future?",
    choices: [
      "A) By limiting communication to in-person meetings.",
      "B) By enabling seamless remote collaboration through tools like VR and AI-powered platforms.",
      "C) By replacing all team members with robots.",
      "D) By making teamwork unnecessary.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT mentioned as a benefit of teamwork?",
    choices: [
      "A) Combining skills and expertise",
      "B) Increased individual accountability",
      "C) Creativity and innovation",
      "D) Improved communication",
    ],
    answer: "B",
  },
  {
    question: "What is the importance of motivation in teamwork?",
    choices: [
      "A) It makes team members work slower.",
      "B) It reduces communication and cooperation in the team.",
      "C) It increases productivity, strengthens relationships, and helps achieve goals.",
      "D) It prevents team members from sharing ideas.",
      "E) It makes the work environment more stressful.",
    ],
    answer: "C",
  },
  {
    question: "What is the first step in solving problems in a team?",
    choices: [
      "A) Take action",
      "B) Identify the problem",
      "C) Vote for the best idea",
      "D) Discuss options",
    ],
    answer: "B",
  },
  {
    question:
      "What does technological adaptability emphasize for engineering leaders?",
    choices: [
      "A) Avoiding new technologies to reduce risks",
      "B) Engaging in lifelong learning and leveraging advancements in technology",
      "C) Relying solely on existing tools and methodologies",
      "D) Limiting innovation to ensure predictability",
    ],
    answer: "B",
  },
  {
    question:
      "Which core leadership trait involves maintaining persistence and calmness during challenges?",
    choices: ["A) Integrity", "B) Vision", "C) Resilience", "D) Adaptability"],
    answer: "C",
  },
  {
    question:
      "Which leadership style focuses on empowering and serving others?",
    choices: [
      "A) Servant leadership",
      "B) Autocratic",
      "C) Transformational",
      "D) Laissez-faire",
    ],
    answer: "A",
  },
  {
    question: "What is a key focus of ethical leadership in engineering?",
    choices: [
      "A) Maximizing project profits",
      "B) Making decisions based on moral values and societal welfare",
      "C) Avoiding risks at all costs",
      "D) Delegating all safety responsibilities to team members",
    ],
    answer: "B",
  },
  {
    question:
      "How can software leaders effectively manage technological changes?",
    choices: [
      "A) Avoid adopting new technologies",
      "B) Rely on outdated practices",
      "C) Stay updated on technology trends and lead their adoption",
      "D) Focus only on in-person development teams",
    ],
    answer: "C",
  },
  {
    question: "How can leaders inspire their teams to innovate?",
    choices: [
      "A) By sharing a clear and motivating vision with the team.",
      "B) By enforcing strict rules and avoiding experimentation.",
      "C) By creating an environment that encourages teamwork and collaboration.",
      "D) By focusing only on achieving results quickly.",
    ],
    answer: "A",
  },
  {
    question: "What is the primary purpose of leadership?",
    choices: [
      "A) To establish authority",
      "B) To guide, influence, and inspire others toward achieving a common goal",
      "C) To manage technical tasks",
      "D) To resolve conflicts",
    ],
    answer: "B",
  },
  {
    question: "What is the key characteristic of transformational leadership?",
    choices: [
      "A) Delegating all responsibilities",
      "B) Driving innovation and inspiring teams",
      "C) Applying strict and rigid rules",
      "D) Avoiding accountability",
    ],
    answer: "B",
  },
  {
    question: "What is one trait of a bad leader?",
    choices: [
      "A) Open communication",
      "B) Empowerment",
      "C) Micromanagement",
      "D) Recognizing achievements",
    ],
    answer: "C",
  },
  {
    question: "What is the outcome of inconsistency in leadership?",
    choices: [
      "A) It builds trust and morale",
      "B) It enhances innovation",
      "C) It motivates team members",
      "D) It creates distrust and erodes respect",
    ],
    answer: "D",
  },
  {
    question:
      "In mentoring techniques, which approach is most effective for building strong mentee relationships?",
    choices: [
      "A) Focusing on results without addressing personal challenges",
      "B) Providing constructive feedback and creating trust",
      "C) Avoiding goal-setting to reduce pressure",
      "D) Prioritizing professional boundaries over rapport",
    ],
    answer: "B",
  },
  {
    question: "Which of the following best defines engineering leadership?",
    choices: [
      "A) Focusing solely on technical expertise to solve problems",
      "B) Balancing urgent project demands with long-term organizational goals",
      "C) Delegating tasks without considering team collaboration",
      "D) Prioritizing individual achievements over team success",
    ],
    answer: "B",
  },
  {
    question:
      "What is one important aspect of team collaboration in engineering?",
    choices: [
      "A) Promoting individual success over teamwork",
      "B) Focusing on a single perspective to solve problems",
      "C) Fostering trust, respect, and diversity among team members",
      "D) Avoiding conflict at all costs",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is NOT a key component of effective communication in engineering leadership?",
    choices: [
      "A) Active listening",
      "B) Clarity",
      "C) Feedback",
      "D) Commanding authority",
    ],
    answer: "D",
  },
  {
    question:
      "What is the first thing a leader should do to effectively motivate their team?",
    choices: [
      "A) Make all decisions alone",
      "B) Understand the strengths and weaknesses of team members",
      "C) Reward only success and ignore mistakes",
      "D) Ignore the opinions of team members",
      "E) Focus solely on personal goals",
    ],
    answer: "B",
  },
  {
    question:
      "What is the most important method an effective leader should use to improve their team's performance?",
    choices: [
      "A) Constantly pressuring team members",
      "B) Providing a clear vision and goals",
      "C) Taking over the responsibilities of the team",
      "D) Always working harder than the team",
      "E) Ignoring the emotions of team members",
    ],
    answer: "B",
  },
];
