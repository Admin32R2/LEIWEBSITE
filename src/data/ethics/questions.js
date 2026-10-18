// Ethics question bank, covering the topics of the Group 1 to Group 7 reports.
// Each topic is grounded in the report on it, with the instructor's slides and
// readings on the same topic (Rachels on Cultural Relativism, Subjectivism and
// Ethical Egoism; Aquinas' Five Ways; the Consequentialism lesson) filling in detail.
//
// Fields
//   t  topic
//   q  question text, supports **bold**
//   c  four choices, the FIRST one is correct (shuffled at runtime)
//   e  explanation paragraphs: why the answer is right and why the traps are wrong

export const TOPICS = [
  "Moral Agent and Moral Dilemma",
  "Debates in Meta-Ethics",
  "Cultural Relativism",
  "Ethical Subjectivism",
  "Ethical Egoism",
  "Supernaturalism",
  "Consequentialism",
];

const [MA, ME, CR, SU, EG, SN, UT] = TOPICS;

export const RAW = [
  // ───────────────────────── Moral Agent and Moral Dilemma ─────────────────────────
  {
    t: MA,
    q: "Which formula best sums up what a **moral agent** is?",
    c: [
      "Impartial view plus rational ability",
      "Strong emotion plus obedience to authority",
      "Social membership plus legal age",
      "Religious faith plus good intentions",
    ],
    e: [
      "A moral agent is impartially concerned with everyone affected, sifts facts, scrutinizes principles, listens to reason even when it means revising convictions, and acts on their deliberations. In short: impartial view plus rational ability.",
    ],
  },
  {
    t: MA,
    q: "Why are babies and young children described as having little or no **moral agency**, even though they are social agents?",
    c: [
      "They cannot yet discern right from wrong and be held accountable for their actions",
      "They are not yet members of society, so the moral rules of that society do not apply to them",
      "They have no interests of their own, so others do not need to consider them when acting",
      "They do not yet feel the emotions, like guilt and empathy, that moral agency is built on",
    ],
    e: [
      "Not all social agents are moral agents. Moral agency needs the ability to tell right from wrong and to be held accountable. Babies are still moral patients: their interests count.",
      "The third choice is the trap. Lacking agency does not mean lacking interests.",
    ],
  },
  {
    t: MA,
    q: "A student notices a classmate copying during an exam and realizes this is not “none of my business” but a question of honesty and fairness. Which characteristic of a moral agent is this?",
    c: ["Ethical awareness", "Judgement", "Autonomous choice", "Accountability"],
    e: [
      "Ethical awareness is noticing that a situation involves right and wrong and is not just an ordinary choice.",
      "Judgement comes next, when the student weighs reporting, talking privately, or staying silent.",
    ],
  },
  {
    t: MA,
    q: "The same student weighs whether to report, talk privately, or stay silent, considering fairness, loyalty, and what the teacher would want. Which characteristic is this?",
    c: ["Judgement", "Ethical awareness", "Autonomous choice", "Accountability"],
    e: [
      "Judgement is taking time to think things through: what is good, what is important, and what might happen, before deciding.",
      "Ethical awareness was the earlier step of recognizing the situation as moral.",
    ],
  },
  {
    t: MA,
    q: "The student loses a friend after speaking up and accepts that outcome without blaming anyone or pretending they said nothing. Which characteristic is this?",
    c: ["Accountability", "Autonomous choice", "Judgement", "Ethical awareness"],
    e: [
      "Accountability means accepting the results of your choice, good or bad, and standing by what you did.",
      "Autonomous choice is about deciding freely, on purpose, without force. It does not cover owning the results afterward.",
    ],
  },
  {
    t: MA,
    q: "Which description best fits a **moral dilemma**?",
    c: [
      "The agent must choose between two or more moral duties but can act on only one, so some moral concern is violated either way",
      "The agent has a clear moral duty to act one way but is tempted or pressured by self-interest to act another way",
      "The agent must choose between options without knowing the facts, so the problem disappears once more is learned",
      "The agent must choose between two morally neutral options, like which of two equally good jobs to accept",
    ],
    e: [
      "In a moral dilemma, every option compromises some moral value, so at least one important moral concern is violated.",
      "The second choice is a false dilemma: a duty against a temptation, not two duties against each other.",
    ],
  },
  {
    t: MA,
    q: "A cashier finds that the store owner overcharged a customer and is tempted to keep quiet to protect their job. What type of dilemma is this?",
    c: [
      "A false (apparent) dilemma, because it is a moral duty against self-interest or pressure",
      "A real dilemma, because two moral duties of equal weight are in conflict",
      "An ontological dilemma, because both obligations are truly equal",
      "A prohibition dilemma, because every available option is morally forbidden",
    ],
    e: [
      "A false dilemma is one where the agent has a moral duty to act one way but is tempted or pressured to act another way. Keeping a job is self-interest, not a competing moral duty.",
      "A real dilemma needs two moral values or duties on the same footing.",
    ],
  },
  {
    t: MA,
    q: "What separates an **epistemic** moral dilemma from an **ontological** one?",
    c: [
      "Epistemic: the agent lacks the knowledge to tell which principle is superior. Ontological: the two obligations really are equal, whatever you know",
      "Epistemic: the two obligations really are equal. Ontological: the agent lacks knowledge of which is superior",
      "Epistemic: the conflict comes from the agent's own mistake or conflicting promise. Ontological: it is created by outside circumstances beyond the agent's control",
      "Epistemic: every available option is morally forbidden. Ontological: several actions are required but only one can physically be performed",
    ],
    e: [
      "Epistemic comes from knowledge: the problem is what the agent knows. Ontological comes from being: the conflict is built into the situation itself, so more information would not resolve it.",
      "The third choice describes self-imposed versus world-imposed. The last describes prohibition versus obligation.",
    ],
  },
  {
    t: MA,
    q: "A person promises two friends to be at both of their events at the same hour, in different cities. What kind of dilemma does this create?",
    c: [
      "A self-imposed dilemma, because the agent created the conflict",
      "A world-imposed dilemma, because outside circumstances created it",
      "A prohibition dilemma, because every available option is morally forbidden",
      "An ontological dilemma, because the two promises are truly equal in weight",
    ],
    e: [
      "A self-imposed dilemma comes from the agent's own mistake, breach, or conflicting commitment. Making both promises created it.",
      "It is also an obligation dilemma, since both promises require action, but that is not one of the choices given.",
    ],
  },
  {
    t: MA,
    q: "In which situation does the agent face a **prohibition dilemma** rather than an obligation dilemma?",
    c: [
      "Every available option is forbidden, so the agent must pick which rule to break",
      "The agent is required to do several actions but can physically do only one",
      "The agent is tempted to do wrong for personal gain",
      "The agent is unsure which of two duties is more important",
    ],
    e: [
      "Prohibition: all available choices are forbidden. Obligation: several actions are required but only one can be done.",
    ],
  },
  {
    t: MA,
    q: "What makes someone a **moral agent**?",
    c: [
      "They can recognize right and wrong, make moral decisions, and take responsibility for their actions",
      "They follow the rules of their society closely and avoid punishment for breaking them",
      "They feel strong emotions like guilt and empathy whenever they see someone suffering",
      "They belong to a religion that teaches them which actions are right and which are wrong",
    ],
    e: [
      "A moral agent is a person who can recognize right and wrong, make moral decisions, and take responsibility, using reason, values, and ethical principles when choosing how to act.",
      "Following rules or feeling emotions may go along with moral agency, but neither is what defines it.",
    ],
  },
  {
    t: MA,
    x: "**Moral agency** is the capacity to recognize moral principles, evaluate choices by right and wrong, and act intentionally with accountability for the consequences.",
    q: "Moral agency is “not just about knowing what is right or wrong.” What else does it require?",
    c: [
      "The autonomy to choose, awareness of the moral weight of actions, and responsibility for outcomes",
      "A complete knowledge of every ethical theory, so the agent always picks the correct one",
      "Approval from the community, so the agent's choices are accepted as morally valid",
      "The ability to predict every consequence of an action before deciding to perform it",
    ],
    e: [
      "Moral agency is the capacity to recognize moral principles, evaluate choices, and act intentionally with accountability. It has three parts: autonomy to choose, awareness of moral weight, and responsibility to accept outcomes.",
    ],
  },
  {
    t: MA,
    q: "No one is watching or telling the student what to do. The student decides on their own to talk privately with the classmate who is cheating, because they believe it is right. Which characteristic is shown?",
    c: ["Autonomous choice", "Accountability", "Ethical awareness", "Judgement"],
    e: [
      "Autonomous choice is deciding on your own, because you truly want to, not because someone forced you or out of habit. A moral agent knows other options existed and picks this one on purpose.",
      "Accountability would come afterward, when the student accepts whatever happens because of the choice.",
    ],
  },
  {
    t: MA,
    x: "A **moral dilemma** is a situation where a person must choose between two or more options, each of which conflicts with a moral principle, so some ethical value is compromised whatever is chosen.",
    q: "Which is **not** a key feature of a moral dilemma?",
    c: [
      "One option is clearly right once you think about it carefully",
      "Two or more ethical principles are in conflict, like truth versus loyalty",
      "Each choice has consequences that challenge the decision maker's values",
      "The person must choose between equally important but opposing values",
    ],
    e: [
      "The key features are conflicting moral values, a difficult decision, and no clear “right” answer.",
      "If one option is clearly right after careful thought, it is an apparent (false) dilemma, not a real one.",
    ],
  },
  {
    t: MA,
    x: "In the classic **trolley problem**, a runaway trolley will kill five people unless you pull a lever to send it down a side track, where it will kill one. In this version, the one person on the side track is someone you love.",
    q: "Why is this a moral dilemma rather than an easy choice?",
    c: [
      "Saving more lives and protecting someone you love are both moral concerns, so either choice violates one",
      "The person does not know how a trolley lever works, so they cannot predict the result of acting",
      "Pulling the lever is illegal, so the person must choose between the law and their own feelings",
      "Only one option has any consequences, so the person must decide whether to act at all",
    ],
    e: [
      "Each option conflicts with a moral principle: one sacrifices five lives, the other sacrifices a loved one. That is what makes it a dilemma, with no clear right answer.",
    ],
  },
  {
    t: MA,
    q: "A flood traps two of your neighbors in separate houses, and you only have time to reach one before the water rises. Which **pair** of dilemma types fits best?",
    c: [
      "World-imposed and obligation dilemma",
      "Self-imposed and obligation dilemma",
      "World-imposed and prohibition dilemma",
      "Self-imposed and prohibition dilemma",
    ],
    e: [
      "World-imposed: the flood, an outside circumstance, created the conflict, not your own mistake. Obligation: you are required to help both but can physically do only one.",
      "It would be a prohibition dilemma only if every option were forbidden.",
    ],
  },
  {
    t: MA,
    q: "A student thinks they must choose between attending a friend's graduation and finishing a group project due that night. Then they realize they can finish the project in the morning before the deadline. What kind of dilemma was it?",
    c: [
      "An apparent (false) dilemma, because a creative alternative resolved it",
      "A real dilemma, because both duties were important to the student",
      "An ontological dilemma, because the two duties were equal in weight",
      "A world-imposed dilemma, because the deadline was outside their control",
    ],
    e: [
      "Apparent dilemmas first feel like dilemmas but can be resolved once a clear priority or creative alternative is found. Real dilemmas have no clear moral priority, so any action incurs moral conflict.",
    ],
  },
  {
    t: MA,
    q: "A nurse cannot decide between telling a patient a painful truth and protecting the patient's hope, because the nurse does not yet know how the patient's family feels about it. Which type of dilemma is this?",
    c: [
      "Epistemic, because missing knowledge keeps the nurse from seeing which principle is superior",
      "Ontological, because truth and hope are equally weighted however much the nurse learns",
      "Self-imposed, because the nurse made a mistake that caused the conflict",
      "Prohibition, because both telling and not telling are forbidden",
    ],
    e: [
      "Epistemic dilemmas come from a lack of complete knowledge or a clear hierarchy. Here, learning the family's view could settle the matter.",
      "If more information could never settle it, it would be ontological.",
    ],
  },
  {
    t: MA,
    x: "Philosophers say **moral agents** can be held responsible for what they do, while **moral patients** are beings whose interests must be considered even if they cannot be held responsible. A newborn, for example, is a moral patient but not yet a moral agent.",
    q: "A 3-year-old breaks a classmate's toy, and a 20-year-old breaks a coworker's laptop on purpose. Why would we blame the adult but not the child in the same way?",
    c: [
      "The adult can discern right from wrong and be held accountable, while the child has little moral agency yet",
      "The adult caused more expensive damage, so the adult's action carries more moral weight",
      "The child is a moral agent too, but children are excused because they are protected by law",
      "The child is neither an agent nor a patient, so the child's actions do not matter morally",
    ],
    e: [
      "A moral agent is someone able to tell right from wrong and be held accountable. Young children have little to no moral agency, so we correct them rather than blame them.",
      "The child is still a moral patient: their interests matter, so the last choice is wrong.",
    ],
  },
  {
    t: MA,
    x: "In real life, many dilemmas that feel impossible are **apparent dilemmas**. They can be resolved once you find a clear priority or a creative alternative. They often pit a moral duty against self-interest, not two moral duties against each other.",
    q: "Jessa finds a wallet with ₱5,000 and an ID. She badly needs money for tuition and feels torn about whether to keep it. What kind of dilemma is she facing?",
    c: [
      "An apparent dilemma, because it is a moral duty (return it) against self-interest (keep it)",
      "A real dilemma, because returning the wallet and paying tuition are equally weighty duties",
      "An ontological dilemma, because no amount of information could ever settle what she should do",
      "A world-imposed obligation dilemma, because she is required to do two things but can do one",
    ],
    e: [
      "Needing money is a real hardship, but keeping the wallet is not a moral duty. Her duty is to return it, so the conflict is duty versus self-interest: an apparent (false) dilemma.",
      "A real dilemma needs two moral duties on equal footing.",
    ],
  },
  {
    t: MA,
    x: "Dilemmas can be sorted by **where the conflict comes from**: self-imposed dilemmas come from the agent's own mistake or conflicting commitment, while world-imposed dilemmas come from outside circumstances beyond the agent's control.",
    q: "Marco told his boss he'd work Saturday and told his barkada he'd drive them to a Saturday wedding, forgetting the overlap. A typhoon then cancels all ferries, so neither can happen. Which describes his **original** conflict?",
    c: [
      "Self-imposed, because Marco's own overlapping promises created it",
      "World-imposed, because the typhoon was outside Marco's control",
      "World-imposed, because the boss and the barkada made the demands",
      "No dilemma at all, because the typhoon cancelled both events",
    ],
    e: [
      "The question asks about the original conflict, which came from Marco's own double commitment, so it is self-imposed. The typhoon later removed both options but did not create the conflict.",
      "The question is meant to test whether you look at where the conflict started.",
    ],
  },
  {
    t: MA,
    x: "A moral agent shows four characteristics: **ethical awareness** (noticing that a situation is moral), **judgement** (thinking it through), **autonomous choice** (deciding freely and on purpose), and **accountability** (standing by the results).",
    q: "An employee follows a manager's order to falsify a report, later saying, “I was just following orders, it's not my fault.” Which characteristic is the employee clearly failing to show?",
    c: ["Accountability", "Ethical awareness", "Judgement", "Autonomous choice"],
    e: [
      "Blaming someone else and refusing to own the result is a failure of accountability. A moral agent doesn't run away from the results or blame others.",
      "Following orders may also show weak autonomous choice, but the employee's statement is about refusing responsibility after the fact.",
    ],
  },

  // ───────────────────────── Debates in Meta-Ethics ─────────────────────────
  {
    t: ME,
    q: "The debates in meta-ethics are grouped into two issues. Which pairing is correct?",
    c: [
      "Metaphysical: whether morality exists outside human thought. Psychological: the mental basis of moral judgment",
      "Metaphysical issues, about the mental basis of moral judgment; psychological issues, about whether morality exists outside human thought",
      "Logical issues, about valid arguments; political issues, about laws",
      "Normative issues, about what we should do; applied issues, about specific cases",
    ],
    e: [
      "The metaphysical issue asks whether morality can exist independently of human minds. The psychological issue asks what happens in our minds when we make moral judgments and act on them.",
    ],
  },
  {
    t: ME,
    q: "Which debate falls under the **metaphysical** issue in meta-ethics?",
    c: [
      "Objectivism versus relativism",
      "Egoism versus altruism",
      "Emotion versus reason",
      "Male versus female morality",
    ],
    e: [
      "Objectivism versus relativism asks whether moral truths exist independently of minds, so it is the metaphysical debate.",
      "The other three are listed under the psychological issue.",
    ],
  },
  {
    t: ME,
    q: "“What is GOOD will remain GOOD regardless of the situation.” Which position is this?",
    c: ["Objectivism", "Relativism", "Emotivism", "Egoism"],
    e: [
      "Objectivism holds there are objective truths in the world that do not depend on anyone's thoughts or feelings.",
      "Relativism says what is good changes depending on who you ask.",
    ],
  },
  {
    t: ME,
    q: "A friend says, “I only helped you move because I knew you'd owe me one.” Which psychological position does this reflect?",
    c: ["Egoism", "Altruism", "Objectivism", "Female (care) morality"],
    e: [
      "Egoism holds that we act out of self-interest, even when we help friends, because of the benefit we get.",
      "Altruism holds that humans can help others out of goodwill with no personal payoff.",
    ],
  },
  {
    t: ME,
    q: "Which statement best describes the **reason** side of the emotion versus reason debate?",
    c: [
      "Right and wrong are worked out by rational thought, so an act unfair to apply to everyone is wrong however you feel",
      "Morality is driven by feelings like empathy, guilt, love, or disgust, so we judge and choose by what we feel in the moment",
      "Morality is grounded on sympathy and care, so we judge by the situation and circumstances of the people affected",
      "Moral claims only express the speaker's attitudes and try to influence others, so they are neither true nor false",
    ],
    e: [
      "The reason side says we analyse and assess and choose what is logical. The emotion side says we judge by what we feel.",
      "The third choice describes female (care) morality, a different psychological debate.",
    ],
  },
  {
    t: ME,
    q: "In the male versus female morality debate, how does **female morality** judge?",
    c: [
      "It is grounded on sympathy and care for the circumstances of the people affected",
      "It is grounded on rules, regulations, and policies that apply the same way to everyone",
      "It is grounded on self-interest, so it considers what benefits the agent",
      "It is grounded on divine commands found in scripture",
    ],
    e: [
      "Female morality treats morality as a web of relationships and considers the people affected. Male morality treats it like a legal system grounded on rules and guidelines.",
      "This debate comes from Carol Gilligan's In a Different Voice (1982), a response to Lawrence Kohlberg's justice-based model of moral development. Gilligan later called care a “different voice” rather than strictly a woman's voice.",
    ],
  },
  {
    t: ME,
    q: "Which philosopher held that “good” cannot be defined in terms of natural properties like pleasure or health, and that objective moral facts are recognized through **moral intuition**?",
    c: ["G. E. Moore", "J. L. Mackie", "James Rachels", "Charles Stevenson"],
    e: [
      "G. E. Moore (1873–1958), a founder of the analytic tradition, argued that good is indefinable in natural terms and is grasped by intuition.",
      "Mackie is the critic of this view.",
    ],
  },
  {
    t: ME,
    q: "J. L. Mackie's **conflict problem** against moral intuitionism says that:",
    c: [
      "when intuitions conflict, nothing neutral tells us who perceives correctly and who has a “moral hallucination”",
      "objective moral facts would be so strange that we would need a mysterious sixth sense to detect them",
      "if culture decides what is moral, then we cannot criticize practices like slavery or genocide in other societies",
      "moral language only expresses the speaker's emotions, so moral statements can never be true or false",
    ],
    e: [
      "The conflict problem is about disagreement: intuitionism gives no neutral way to settle clashing intuitions.",
      "The second choice is Mackie's other argument, the problem of perception. Both target intuitionism, so read carefully which is which.",
    ],
  },
  {
    t: ME,
    q: "Mackie's **problem of perception** argues that:",
    c: [
      "objective moral facts would be so unlike physical facts that detecting them would need an unscientific “sixth sense”",
      "people's moral intuitions often conflict and there is no way to decide between them",
      "if the majority always decides what is right, then people who oppose society's rules are always wrong",
      "real moral progress is impossible unless there is an objective standard that society is moving toward",
    ],
    e: [
      "The perception problem is about how we could know such odd facts at all. The second choice is the conflict problem.",
    ],
  },
  {
    t: ME,
    q: "Which is **not** one of the three consequences of strict cultural relativism that James Rachels highlighted?",
    c: [
      "Every culture would be forced to adopt the same moral code",
      "We could not judge horrific practices in other societies",
      "Rightness would be decided by the majority, so reformers would be wrong",
      "Moral progress would be called into doubt",
    ],
    e: [
      "Rachels' three consequences are no external judgment, rightness by majority, and the problem of moral progress.",
      "Relativism says codes differ. It does not force them to be the same, so the first choice reverses the theory.",
    ],
  },
  {
    t: ME,
    q: "Which branch of ethics **establishes the general rules or frameworks** that define what makes actions right or wrong?",
    c: ["Normative ethics", "Meta-ethics", "Applied ethics", "Descriptive ethics"],
    e: [
      "Normative ethics asks “What should we do?” and sets the general rules. Applied ethics takes those rules to specific controversial topics. Meta-ethics steps back to ask what morality itself is.",
    ],
  },
  {
    t: ME,
    x: "Ethics has three branches. **Meta-ethics** asks what morality is. **Normative ethics** sets general rules for what we should do. **Applied ethics** takes those rules to specific controversial issues in areas like medicine, business, or technology.",
    q: "A hospital ethics board debates whether an AI may decide which patients get scarce ventilators. Which branch of ethics is this?",
    c: [
      "Applied ethics, because it applies general rules to a specific real-world case",
      "Normative ethics, because it sets out what makes actions right or wrong",
      "Meta-ethics, because it asks whether moral facts exist at all",
      "Psychological meta-ethics, because it studies how the board members think",
    ],
    e: [
      "Applied ethics takes general rules and applies them to controversial, specific topics like medicine, business, or technology. Examples include abortion, war, and AI.",
    ],
  },
  {
    t: ME,
    q: "Which question is a **meta-ethical** question?",
    c: [
      "What does “right” even mean, and where do morals come from?",
      "Which actions are right, and what should we do in general?",
      "How should we apply ethics to war and artificial intelligence?",
      "Should a company recall a product that might be unsafe?",
    ],
    e: [
      "Meta-ethics tries to solve the mystery of morality itself: what “good” and “right” mean and where morals come from.",
      "“What should we do?” is the normative question. The last two are applied questions about specific cases.",
    ],
  },
  {
    t: ME,
    x: "Meta-ethics has two kinds of debate. The **metaphysical** debate (objectivism vs relativism) asks whether morality exists outside human minds. The **psychological** debates (egoism vs altruism, emotion vs reason, male vs female morality) ask what goes on in our minds when we judge.",
    q: "A student says, “Some things are just wrong, no matter what culture or time period you're in.” Which side of which debate is this?",
    c: [
      "Objectivism, in the metaphysical debate",
      "Relativism, in the metaphysical debate",
      "Reason, in the psychological debate",
      "Male morality, in the psychological debate",
    ],
    e: [
      "Wrong no matter the culture or time means moral truth exists independently of what anyone thinks, which is objectivism. Objectivism versus relativism is the metaphysical debate.",
    ],
  },
  {
    t: ME,
    q: "A student agrees with “I trust my gut feeling over logic when judging right and wrong.” Which position does this match?",
    c: [
      "Emotion, in the emotion versus reason debate",
      "Female morality, in the male versus female debate",
      "Relativism, in the objectivism versus relativism debate",
      "Egoism, in the egoism versus altruism debate",
    ],
    e: [
      "The emotion side says morality is driven by feelings like empathy, guilt, love, or disgust, and we judge by what we feel.",
      "Female morality also looks beyond rules, but it is about care for the people affected, not about trusting feelings over logic.",
    ],
  },
  {
    t: ME,
    q: "“You can't judge an action without knowing who it affects and how.” Which side of which debate does this statement reflect?",
    c: [
      "Female morality, in the male versus female debate",
      "Relativism, in the objectivism versus relativism debate",
      "Emotion, in the emotion versus reason debate",
      "Altruism, in the egoism versus altruism debate",
    ],
    e: [
      "Female morality treats morality as a web of relationships and judges by the situation and circumstances of the people affected.",
      "Relativism is the tempting trap, but relativism says rightness varies by person or culture, not that we must consider the people affected.",
    ],
  },
  {
    t: ME,
    q: "“When judging whether an action is right or wrong, rules matter more than personal situations.” Which position is this?",
    c: [
      "Male morality, which treats morality like a legal system",
      "Reason, which works out right and wrong by logic",
      "Objectivism, which says good stays good in any situation",
      "Female morality, which treats morality as a web of relationships",
    ],
    e: [
      "Male morality treats morality like a legal system and historically aligns with how boys were socialized to value independence and fairness.",
      "Objectivism is close, but it is a metaphysical claim about moral truth, not a preference for rules over situations.",
    ],
  },
  {
    t: ME,
    q: "Which statement best defines **altruism**?",
    c: [
      "Humans can and should act purely for the benefit of others, even at a personal cost",
      "Humans help others only when they expect something in return, even indirectly",
      "Humans should act for others only when it also serves their own interests",
      "Humans act for others because society's rules require it of them",
    ],
    e: [
      "Altruism is the exact opposite of egoism: we are capable of genuinely caring about others with no personal payoff.",
      "The third choice is how ethical egoism allows helping others, which is the opposite view.",
    ],
  },
  {
    t: ME,
    q: "Which matching of these meta-ethics philosophers is correct?",
    c: [
      "Moore: English, helped found analytic philosophy. Mackie: Australian. Rachels: American, ethics and bioethics",
      "Moore: Australian, helped found analytic philosophy. Mackie: English. Rachels: American, ethics and bioethics",
      "Moore: American, ethics and bioethics. Mackie: Australian. Rachels: English, helped found analytic philosophy",
      "Moore: English, ethics and bioethics. Mackie: American. Rachels: Australian, helped found analytic philosophy",
    ],
    e: [
      "G. E. Moore (1873–1958) was English and helped found the analytic tradition. J. L. Mackie (1917–1981) was Australian. James Rachels (1941–2003) was American and specialized in ethics, animal rights, and bioethics.",
    ],
  },
  {
    t: ME,
    q: "Mackie's two problems, perception and conflict, are aimed against which view?",
    c: [
      "Moore's view that objective moral facts are known through moral intuition",
      "Rachels' view that cultural relativism has unacceptable consequences",
      "The relativist view that morality depends on culture",
      "The egoist view that people always act from self-interest",
    ],
    e: [
      "Mackie raises the epistemological problem: how could we know such facts? Both of his problems attack the idea that we perceive objective moral facts by intuition.",
    ],
  },
  {
    t: ME,
    q: "Rachels' “deciding rightness by majority” consequence implies what about historical civil rights heroes?",
    c: [
      "They were technically “immoral,” since they broke the rules of their own society",
      "They were moral heroes, since history later proved the majority wrong",
      "They were neither moral nor immoral, since morality is personal taste",
      "They were moral, since their culture's ideals already supported equality",
    ],
    e: [
      "If the majority is always right, standing against society's rules makes you wrong. That is the absurd result Rachels points to.",
      "The second choice is what we actually believe, and the fact that relativism can't say it is the problem.",
    ],
  },
  {
    t: ME,
    q: "According to the **problem of moral progress**, what would the end of slavery mean if strict cultural relativism were true?",
    c: [
      "Society simply changed its habits; it did not actually become better",
      "Society moved closer to an objective moral goal and became better",
      "Society was wrong before and is right now by universal standards",
      "Society proved that the majority is always morally correct",
    ],
    e: [
      "True progress requires moving toward a higher, objective goal. Without one, improvements are only changes in habit. Most people think ending slavery was real progress, which counts against relativism.",
    ],
  },
  {
    t: ME,
    x: "In the 1970s, psychologist **Lawrence Kohlberg** built a theory of moral development that ranked reasoning by abstract rules and justice highest. **Carol Gilligan**, his student, noticed his studies were based on boys and argued in *In a Different Voice* (1982) that care for relationships is a different, not lesser, way of reasoning. The “male vs female morality” debate in meta-ethics comes from this.",
    q: "Two siblings judge a classmate who stole food. One says, “Stealing breaks the rules, period.” The other says, “His family is hungry; we should understand his situation and help.” Which pairing fits the male versus female morality debate?",
    c: [
      "First sibling: male morality (rules). Second sibling: female morality (care and circumstance)",
      "First sibling: female morality (care). Second sibling: male morality (rules and fairness)",
      "First sibling: reason. Second sibling: relativism, since the right answer depends on the person",
      "First sibling: objectivism. Second sibling: egoism, since helping benefits the helper",
    ],
    e: [
      "Male morality treats morality like a legal system grounded on rules. Female morality treats it as a web of relationships and considers the situation of those affected.",
      "Gilligan later said care is a “different voice,” not strictly a woman's voice. Either sibling could be of any gender.",
    ],
  },
  {
    t: ME,
    x: "G. E. Moore argued that “good” is a simple property we grasp by **moral intuition**, the way we just see that something is yellow without being able to define yellow. J. L. Mackie replied that such properties would be “queer,” utterly unlike anything else in the universe.",
    q: "Two judges both say they “just intuitively see” the right verdict, but their intuitions point in opposite directions. Which of Mackie's objections does this most directly support?",
    c: [
      "The conflict problem, since intuitionism gives no neutral way to tell who is perceiving correctly",
      "The problem of perception, since objective moral facts would need a strange sixth sense to detect",
      "The problem of moral progress, since neither judge's view can be called an improvement",
      "The disagreement problem, since both judges are only reporting their personal approval",
    ],
    e: [
      "Clashing intuitions with no neutral way to settle them is exactly Mackie's conflict problem: who is seeing correctly and who is having a “moral hallucination”?",
      "The disagreement problem is an objection to simple subjectivism, a different theory.",
    ],
  },
  {
    t: ME,
    x: "**Psychological egoism** claims that people always act from self-interest. A common reply is that even if helping others makes us feel good, the good feeling may be a side effect of caring, not the reason we helped.",
    q: "A stranger dives into a river to save a drowning child, then says, “I didn't think, I just jumped.” Which side of the egoism versus altruism debate does this case best support?",
    c: [
      "Altruism, since the act seems aimed at the child's good with no thought of payoff",
      "Egoism, since the rescuer will later enjoy praise and feel proud of the act",
      "Emotion, since the rescuer acted on a feeling rather than on careful logic",
      "Objectivism, since saving a child is right no matter what culture you're in",
    ],
    e: [
      "Altruism says humans can act purely for others' benefit, even at personal cost. Acting without any thought of reward is the strongest kind of case for it.",
      "An egoist could say the praise came later, but that confuses a side effect with the motive. The emotion and objectivism choices answer different debates than the one this case tests.",
    ],
  },
  {
    t: ME,
    x: "Meta-ethics has two kinds of questions. **Metaphysical** issues ask whether morality exists independently of human minds. **Psychological** issues ask what happens in our minds when we make moral judgments and act on them.",
    q: "A researcher scans people's brains while they decide whether to lie, to see whether emotion or calculation drives the choice. Which meta-ethical issue is the research closest to?",
    c: [
      "The psychological issue, in the emotion versus reason debate",
      "The metaphysical issue, in the objectivism versus relativism debate",
      "The psychological issue, in the egoism versus altruism debate",
      "The metaphysical issue, in the emotion versus reason debate",
    ],
    e: [
      "The study asks what happens in the mind during moral judgment, whether feeling or reasoning drives it. That is the emotion versus reason debate under psychological issues.",
      "Emotion versus reason is never a metaphysical debate, so the last choice mixes up the categories.",
    ],
  },

  // ───────────────────────── Cultural Relativism ─────────────────────────
  {
    t: CR,
    q: "Which statement best defines **cultural relativism**?",
    c: [
      "Understanding a culture by its own beliefs and practices instead of judging it by our own culture's standards",
      "Judging another culture based on the beliefs, values, and standards of our own culture",
      "Believing that every culture must adopt the same universal standards of right and wrong, whatever its traditions",
      "Believing that our own culture's practices are the most rational, so other cultures should learn from ours",
    ],
    e: [
      "Cultural relativism means understand before you judge. Different does not mean wrong.",
      "The second choice is the definition of ethnocentrism, its opposite.",
    ],
  },
  {
    t: CR,
    q: "Which question would an **ethnocentric** person ask when seeing an unfamiliar tradition?",
    c: [
      "“Why don't they do things the way we do?”",
      "“Why do they do things this way, and what does it mean to them?”",
      "“What is the historical meaning behind this practice?”",
      "“Can you tell me more about this tradition?”",
    ],
    e: [
      "Ethnocentrism judges by our own standards, so it asks why they don't do things our way. The other three are cultural relativist questions that seek understanding.",
    ],
  },
  {
    t: CR,
    q: "A traveler eats grilled insects in Thailand and thinks, “Our food is better because it's what I'm used to.” This is an example of:",
    c: [
      "Ethnocentrism, because it assumes familiar food is better simply because it is familiar",
      "Cultural relativism, because it compares the food of two cultures from a personal view",
      "Ethical subjectivism, because it only reports the traveler's own approval or taste",
      "Moral objectivism, because it claims one food is better no matter who is asked",
    ],
    e: [
      "A classic example of ethnocentrism is assuming our own food or eating habits are better simply because they are familiar.",
      "The judgment's basis, familiarity with one's own culture, is what makes it ethnocentric rather than just a personal preference.",
    ],
  },
  {
    t: CR,
    q: "Who is credited with introducing, around the **1890s**, the idea that cultures should be studied within their own context?",
    c: ["Franz Boas", "William Graham Sumner", "Ruth Benedict", "Herodotus"],
    e: [
      "Franz Boas (1858–1942) introduced the idea in the 1890s, and he and his students promoted it as a principle in anthropology in the early 1900s.",
      "Sumner and Benedict are quoted by Rachels as relativist writers, and Herodotus told the Darius story, but none of them introduced the idea in anthropology.",
    ],
  },
  {
    t: CR,
    q: "In Herodotus' story, King Darius asked Greeks and Callatians what they would take to adopt each other's funeral customs. What did each group practice?",
    c: [
      "The Greeks cremated their dead fathers; the Callatians ate them",
      "The Greeks ate their dead fathers; the Callatians cremated them",
      "The Greeks buried their dead; the Callatians left them in the snow",
      "Both groups cremated their dead but disagreed on the ritual",
    ],
    e: [
      "The Greeks burned their dead on a funeral pyre, and the Callatians ate the bodies of their dead fathers. Each group was horrified at the other's custom.",
      "Rachels uses the story to show that different cultures have different moral codes.",
    ],
  },
  {
    t: CR,
    q: "What is the logical flaw in the **Cultural Differences Argument**, according to Rachels?",
    c: [
      "Its premise is about what people believe, but its conclusion is about what really is the case, so the conclusion does not follow",
      "Its premise is false, because anthropologists have shown that all cultures actually share exactly the same moral code",
      "Its conclusion has been proven false, because universal human rights show that objective moral truth exists",
      "It assumes the majority of a culture is always right, so it ignores the views of reformers inside that culture",
    ],
    e: [
      "The argument goes from “cultures disagree” to “there is no objective truth.” Disagreement alone does not show there is no truth. People once disagreed about whether the earth is flat, and that did not make geography a matter of opinion.",
      "Rachels stresses he is not yet saying the conclusion is false. He is saying it does not follow, so the argument proves nothing. That is why the third choice is wrong.",
    ],
  },
  {
    t: CR,
    q: "Some people believe the earth is flat and others believe it is round. Rachels uses this example to show that:",
    c: [
      "disagreement about a subject does not mean there is no objective truth about it",
      "scientific truth, like moral truth, is relative to the culture that holds it",
      "the view held by most societies should be accepted as the correct one",
      "people who disagree are really using different definitions of the same words",
    ],
    e: [
      "Some societies might simply be wrong. If the world is round, not everyone must know it, and in the same way, if there is moral truth, not everyone must know it.",
    ],
  },
  {
    t: CR,
    q: "A South African in 1975 decides apartheid is fine because it conforms to his society's code. Which consequence of cultural relativism does this illustrate?",
    c: [
      "We could settle right and wrong just by checking our own society's code",
      "We could no longer say the customs of other societies are morally inferior to our own",
      "The idea of moral progress is called into doubt",
      "Tolerance requires that we never condemn anything",
    ],
    e: [
      "Rachels' second consequence: relativism gives a simple test, which is to check your society's code. That stops us from criticizing even our own society.",
      "The first consequence is about other societies. This example is about one's own.",
    ],
  },
  {
    t: CR,
    q: "Under strict cultural relativism, how could a reformer like Martin Luther King Jr. legitimately be a reformer?",
    c: [
      "Only by showing society fails its own ideals, never by challenging the ideals",
      "By challenging the society's ideals themselves and showing they are objectively wrong",
      "By appealing to the moral code of a more advanced culture as the better standard",
      "In no way at all, since any attempt to change society's code is automatically wrong",
    ],
    e: [
      "Rachels says reform makes sense under relativism only in a limited way: a reformer can point out that society is not living up to its own ideals, but cannot challenge the ideals, which are correct by definition.",
      "The last choice is too strong. Rachels allows that limited kind of reform.",
    ],
  },
  {
    t: CR,
    q: "In a culture where people will not eat cows because they believe a cow may hold the soul of someone's grandmother, Rachels says the real difference from us is in:",
    c: [
      "their belief system, not their values",
      "their values, not their belief system",
      "their level of moral progress",
      "their respect for animals over humans",
    ],
    e: [
      "We agree we shouldn't eat Grandma. We simply disagree about whether the cow could be Grandma. The difference is factual or religious belief, not values.",
      "This is why there is less disagreement about values than there appears to be.",
    ],
  },
  {
    t: CR,
    q: "According to Rachels, why did Eskimos sometimes practice infanticide?",
    c: [
      "Scarce food, long nursing, a nomadic life, and many deaths among male hunters forced drastic survival choices",
      "They had less affection for their children and little respect for human life, as early explorers reported",
      "Their religion required parents to sacrifice some infants, especially girls, to the spirits of the hunt",
      "Their law required each family to keep equal numbers of boys and girls, whatever the food supply",
    ],
    e: [
      "The explanation is not that they valued children less. A family will always protect its babies if conditions permit. Adoption was common, and killing was the last resort.",
      "So the raw data of anthropologists can make value differences look bigger than they are.",
    ],
  },
  {
    t: CR,
    q: "Which values does Rachels argue **every** viable society must share?",
    c: [
      "Caring for the young, truth-telling, and a ban on murder",
      "Monogamy, private property, and some form of religious worship",
      "Democracy, freedom of speech, and the equality of men and women",
      "Respect for elders, hospitality to guests, and burial of the dead",
    ],
    e: [
      "Without caring for infants the group would die out. Without truth-telling communication becomes impossible. Without a ban on murder no one is secure and society collapses.",
      "Cultures may differ in the exceptions they allow, but they agree on these larger rules.",
    ],
  },
  {
    t: CR,
    q: "In discussing excision, what culture-neutral standard does Rachels propose for judging a practice?",
    c: [
      "Whether the practice promotes or hinders the welfare of the people whose lives it affects",
      "Whether the practice agrees with the moral code of the society judging it",
      "Whether the practice is commanded or permitted by the culture's own religion",
      "Whether the practice has been handed down by the ancestors since ancient times",
    ],
    e: [
      "We can ask whether a practice helps or harms those affected, and whether another arrangement would do better. Since the welfare of its members is a value inside every viable culture, this is not an outside standard forced on them.",
      "The second choice is what relativists fear critics are doing. Rachels' standard is designed to avoid that.",
    ],
  },
  {
    t: CR,
    q: "Rachels says thoughtful people hesitate to condemn excision partly out of a wish to be tolerant. What is his reply?",
    c: [
      "Tolerance doesn't mean all practices are equally good; if none were better, there'd be nothing to tolerate",
      "Tolerance is not really a virtue, so we should openly condemn any foreign practice that differs from ours",
      "Tolerance means accepting that every practice is right for the culture that has it, so we should not judge",
      "Tolerance applies only to cultures similar to our own, not to those whose practices cause harm",
    ],
    e: [
      "Tolerance is willingness to live in peace with those who see things differently. It does not mean all beliefs are equally admirable.",
      "Rachels also separates judging a practice deficient from deciding to do something about it, like a campaign or pressure.",
    ],
  },
  {
    t: CR,
    q: "Which is one of the two lessons we **should** learn from cultural relativism?",
    c: [
      "It warns us not to assume all our preferences rest on an absolute standard",
      "It proves that no practice of any society can be criticized from outside",
      "It shows that all moral codes are equally valid and none is better",
      "It shows that ethics is only a matter of each person's taste and feeling",
    ],
    e: [
      "First lesson: many, but not all, of our practices are peculiar to our society, like funerary customs. Relativism goes wrong when it infers that because some are like this, all must be. Second lesson: keep an open mind.",
      "The other three are exactly the overreaches Rachels rejects.",
    ],
  },
  {
    t: CR,
    q: "Which statement best defines **culture**?",
    c: [
      "The way of life shared by a group, including beliefs, values, traditions, language, food, and customs",
      "The laws and moral rules that a government enforces on the people living in its territory",
      "The religion a group practices, along with the rituals and prayers handed down in it",
      "The personal tastes and habits each individual develops while growing up in a family",
    ],
    e: [
      "Culture is the way of life shared by a group of people. These practices are part of culture because they are learned and shared by people in society, like respecting elders, celebrating fiestas, and sharing Filipino food.",
    ],
  },
  {
    t: CR,
    q: "Cultural relativism is often summed up as “understand before you judge.” How does this differ from the cultural relativism James Rachels criticizes?",
    c: [
      "The first is an attitude of understanding; Rachels' version is the claim that no objective moral standard exists",
      "The first says no objective moral standard exists; Rachels' version is only an attitude of understanding",
      "Both are the same claim, that every culture's practices are equally right",
      "The first concerns food and clothing; Rachels' version concerns religion only",
    ],
    e: [
      "The first is respect and open-mindedness: learn a practice's meaning before judging. Rachels attacks a stronger theory: that right and wrong are only what each culture's code says.",
      "You can accept the first and still reject the second. Rachels himself says the lesson to learn from relativism is keeping an open mind.",
    ],
  },
  {
    t: CR,
    x: "Traditional clothing can carry four kinds of meaning: **historical** (a people's heritage), **religious** (a link to faith), **traditional** (passed down through generations), and **social** (identity, status, or unity).",
    q: "A traditional outfit shows that the wearer belongs to a certain clan and holds a respected rank in it. Which kind of meaning is this?",
    c: ["Social meaning", "Historical meaning", "Traditional meaning", "Religious meaning"],
    e: [
      "Belonging to a clan and holding a rank are about identity and status within a community, so the meaning is social.",
    ],
  },
  {
    t: CR,
    q: "Which is **not** a result of judging another culture **without** cultural relativism?",
    c: [
      "We appreciate cultural diversity",
      "We may judge too quickly",
      "We might think our way is the only correct way",
      "We may create unfair opinions",
    ],
    e: [
      "Without cultural relativism we may judge too quickly, think our way is the only correct way, misunderstand the culture, and create unfair opinions.",
      "Appreciating cultural diversity is listed under what happens with cultural relativism.",
    ],
  },
  {
    t: CR,
    q: "A new classmate from Thailand greets you with palms pressed together. Which response shows curiosity, respect, and a willingness to understand?",
    c: [
      "“That is different from how we usually greet people. Can you tell me more about it?”",
      "“That is weird. Why don't you just greet people the way we do here?”",
      "“Our handshake is better, but I'll accept your greeting while you're here.”",
      "“Every culture is equally right, so there's nothing to ask about.”",
    ],
    e: [
      "Asking and listening help us learn and connect. The second choice is the ethnocentric response. The last choice sounds tolerant, but it shuts down curiosity.",
    ],
  },
  {
    t: CR,
    x: "Among the **Maasai** of Kenya and Tanzania, cattle have traditionally been ritually slaughtered during important religious and ceremonial occasions. To an outsider, this can look like needless killing.",
    q: "Why do cattle play such a central role in these Maasai occasions?",
    c: [
      "Cattle hold deep spiritual, social, and economic significance in Maasai culture",
      "Cattle are the only animal the Maasai are permitted to eat under their law",
      "Cattle are sacrificed to reduce the size of herds during dry seasons",
      "Cattle are a symbol borrowed from neighboring cultures in East Africa",
    ],
    e: [
      "The cattle are sacrificed on these occasions precisely because they hold deep spiritual, social, and economic significance.",
      "This is the kind of context cultural relativism asks us to learn before judging a practice.",
    ],
  },
  {
    t: CR,
    x: "Cultural relativism began in the work of anthropologists in the late 1800s. Around the 1890s, **Franz Boas** introduced the idea that cultures should be studied in their own context, and he and his students promoted it in the early 1900s.",
    q: "When did cultural relativism become **widely accepted** as an approach to understanding cultural diversity?",
    c: ["By the mid-1900s", "In the 1890s", "In the early 1900s", "In the late 1800s"],
    e: [
      "It began in the late 1800s, Boas introduced the idea around the 1890s, he and his students promoted it in the early 1900s, and it was widely accepted by the mid-1900s.",
    ],
  },
  {
    t: CR,
    x: "Anthropologists distinguish **cultural relativism** as a research method (understand a practice in its own context before judging it) from **moral relativism** (the claim that no practice can ever be judged right or wrong across cultures). Respecting cultures relies on the first. James Rachels criticizes the second.",
    q: "A Filipino student abroad is laughed at for eating rice with her hands (kamayan). A classmate instead asks why kamayan matters to her. What is the classmate practicing?",
    c: [
      "Cultural relativism as a method: understanding a practice in its own context before judging",
      "Moral relativism: holding that no practice anywhere can ever be judged right or wrong",
      "Ethnocentrism: comparing the practice with the classmate's own way of eating",
      "Ethical subjectivism: deciding the practice is right because the classmate approves",
    ],
    e: [
      "Asking “Why is this important to you?” is the cultural relativist question. It seeks understanding without making any claim about objective morality.",
      "The classmates who laughed were being ethnocentric.",
    ],
  },
  {
    t: CR,
    x: "Rachels points out that customs can differ because of different **factual or religious beliefs**, not different values. His example: people who won't eat cows because a cow may hold a grandmother's soul share our value (don't eat Grandma). They just believe different facts.",
    q: "In one community, people refuse blood transfusions because they believe scripture forbids taking in blood, even when they deeply value their children's lives. According to Rachels' reasoning, where does the disagreement with hospital doctors lie?",
    c: [
      "Mainly in religious beliefs, since both sides value the child's life",
      "Mainly in values, since the community values life less than doctors",
      "Mainly in emotion, since the community is acting on fear",
      "Nowhere, since every culture's practice is equally correct",
    ],
    e: [
      "As with the cow and the grandmother, the two sides share the value (protect the child) and disagree about a belief (what scripture forbids). Many factors shape customs, and values are only one of them.",
    ],
  },
  {
    t: CR,
    x: "Rachels argues that some rules exist in every viable society **because society could not exist without them**. Without a presumption of truth-telling, for example, asking anyone anything would be pointless, since their answer could just as easily be false.",
    q: "A writer imagines an island society where lying is never considered wrong. Following Rachels, what would most likely happen to this society?",
    c: [
      "Communication would break down, and without communication a complex society could not exist",
      "It would thrive, since people would never feel guilty for telling convenient lies",
      "It would be just as valid as ours, since cultures cannot be judged from outside",
      "It would make faster moral progress, since it is free of strict rules",
    ],
    e: [
      "Rachels: in any complex society there must be a presumption in favor of truthfulness. There may be exceptions, but they are exceptions to a rule that is in force.",
      "The third choice is the relativist reply, but Rachels' point is that such a society could not even exist.",
    ],
  },
  {
    t: CR,
    x: "Rachels separates two things: (a) **judging** a practice morally deficient and (b) deciding to **do something about it**, like a campaign, diplomatic pressure, or force. The first is about seeing clearly. The second is a separate question that may or may not be wise.",
    q: "A traveler concludes that a village's practice of forcing child marriage harms the girls involved, but decides that loudly protesting in the village would only make things worse. Is the traveler being consistent, according to Rachels?",
    c: [
      "Yes, because judging a practice wrong does not require campaigning or interfering",
      "No, because judging a practice wrong means one must always act against it",
      "No, because cultural relativism forbids judging any practice at all",
      "Yes, because the practice is right for that village and only seems harmful",
    ],
    e: [
      "Rachels: sometimes it may be right to “do something about it,” but often it will not be. Judging and acting are separate questions.",
      "The traveler's standard, whether the practice promotes or hinders the welfare of those affected, is the culture-neutral standard Rachels proposes.",
    ],
  },

  // ───────────────────────── Ethical Subjectivism ─────────────────────────
  {
    t: SU,
    q: "Which statement defines **ethical subjectivism** as a metaethical view?",
    c: [
      "Whether a moral judgment is true or false depends on an individual's attitudes, feelings, or opinions",
      "Whether a moral judgment is true or false depends on the code of one's culture",
      "Whether a moral judgment is true or false is independent of anyone's attitudes, feelings, or opinions",
      "Whether a moral judgment is true or false depends on whether it agrees with the commands of God",
    ],
    e: [
      "Subjectivism ties moral truth to the individual's attitudes. The second choice ties it to culture, which is cultural relativism.",
    ],
  },
  {
    t: SU,
    q: "What is the difference between **normative subjectivism** and **metaethical subjectivism**?",
    c: [
      "Normative: an act is right if the person judging approves of it. Metaethical: moral statements are true or false based on feelings, not objective facts",
      "Normative: the truth of moral statements depends on feelings. Metaethical: an action is right if the person judging approves of it",
      "Normative: moral truth depends on what a group approves of. Metaethical: moral truth depends only on what one individual approves of",
      "Normative: moral judgments express emotions and influence others. Metaethical: moral judgments are reasoned reports of objective facts",
    ],
    e: [
      "Normative subjectivism gives a moral theory: right is what the judge approves. Metaethical subjectivism is a view about the status of moral statements: their truth depends on feelings, not objective facts.",
      "The second choice swaps them.",
    ],
  },
  {
    t: SU,
    q: "According to **simple subjectivism**, “Lying is wrong” means:",
    c: [
      "“I (the speaker) disapprove of lying.”",
      "“Boo to lying, and don't you do it!”",
      "“Our society disapproves of lying.”",
      "“Lying is wrong no matter who says it.”",
    ],
    e: [
      "Simple subjectivism treats moral sentences as factual reports about the speaker's own approval or disapproval, and nothing more.",
      "“Boo to lying!” is how emotivism would read it, as an expression rather than a report.",
    ],
  },
  {
    t: SU,
    q: "Ana says, “Abortion is wrong,” and Ben says, “Abortion is not wrong.” Why does this exchange cause trouble for simple subjectivism?",
    c: [
      "Each only reports their own attitude, so both statements are true and they are not really disagreeing",
      "One of them must be mistaken about their own feelings, which simple subjectivism says is common",
      "Simple subjectivism says the view of the majority settles the question, so one of them must lose",
      "Simple subjectivism says both statements are only expressions of feeling, so neither is true or false",
    ],
    e: [
      "This is the disagreement problem. If “X is wrong” means “I disapprove of X,” then “I disapprove” and “I approve” can both be true at once. The speakers talk past each other, yet real moral debates are real disagreements.",
    ],
  },
  {
    t: SU,
    q: "A person once approved of slavery and later realized they had been mistaken. Which objection to simple subjectivism does this illustrate?",
    c: [
      "It cannot account for fallibility, since sincere reports of approval can't be mistaken",
      "It cannot account for disagreement, since two people would be talking past each other",
      "It cannot account for moral language influencing behavior",
      "It cannot account for cultural differences",
    ],
    e: [
      "Under simple subjectivism, when you sincerely said “slavery is right” you were only reporting your approval, which was true. So you could never have been wrong. But people do recognize past moral mistakes.",
      "The second choice is the other objection, disagreement. Both are real objections, but this example is about being mistaken.",
    ],
  },
  {
    t: SU,
    q: "Who chiefly developed **emotivism** as an improved version of simple subjectivism?",
    c: [
      "Charles L. Stevenson",
      "G. E. Moore",
      "J. L. Mackie",
      "William Graham Sumner",
    ],
    e: [
      "Emotivism was developed chiefly by the American philosopher Charles L. Stevenson (1908–1978).",
    ],
  },
  {
    t: SU,
    q: "Why does emotivism point to utterances like “Hurrah for Abraham Lincoln!” and “Damn Hamlet!”?",
    c: [
      "They are neither statements nor commands; they express attitudes",
      "They are factual reports about how the speaker feels, so they can be true or false",
      "They are commands that tell the listener exactly what they ought to do",
      "They show that moral claims, like other facts, can be proven true",
    ],
    e: [
      "Emotivism begins from the observation that language has many uses. These sentences express attitude, and emotivism says moral language works the same way.",
      "The second choice is how simple subjectivism would read them, as factual reports.",
    ],
  },
  {
    t: SU,
    q: "What is the core difference between **simple subjectivism** and **emotivism** on “Cheating is wrong”?",
    c: [
      "Simple subjectivism: a factual report, “I disapprove of cheating.” Emotivism: a non-factual expression, like “Cheating, boo!”",
      "Simple subjectivism reads it as an expression of feeling; emotivism reads it as a factual report",
      "Both read it as a statement that is true or false depending on whether the speaker's culture approves of cheating",
      "Simple subjectivism says it expresses society's view; emotivism says it expresses God's view",
    ],
    e: [
      "Simple subjectivism: moral sentences describe the speaker's approval, so they can be true or false. Emotivism: they are expressive, not descriptive, and work like exclamations.",
      "The emotivist version is sometimes written “I disapprove of cheating!” The exclamation mark signals expressing, not stating.",
    ],
  },
  {
    t: SU,
    q: "According to emotivism, moral language is used for which two purposes?",
    c: [
      "To influence people's behavior and to express one's attitude",
      "To state facts and to give commands",
      "To report one's approval and to describe society's rules",
      "To discover moral truths and to prove them",
    ],
    e: [
      "Moral language is not fact-stating. First, it influences people's behavior. Second, it expresses one's attitude.",
    ],
  },
  {
    t: SU,
    q: "How does emotivism handle the **disagreement problem** that sank simple subjectivism?",
    c: [
      "It treats it as disagreement in attitude, about what people want to happen, not about facts",
      "It says moral disagreements are really factual disagreements about objective moral truths that can be settled",
      "It says moral disagreements do not really exist, since the speakers are only reporting their own feelings",
      "It says the person who expresses the stronger feeling is the one whose moral judgment is correct",
    ],
    e: [
      "One fan shouts “Go team!” and another “Down with the team!” Neither states a fact, but they clearly disagree about what they want to happen. That is the emotivist model of moral disagreement.",
    ],
  },
  {
    t: SU,
    q: "What is Rachels' main criticism of emotivism?",
    c: [
      "It cannot account for the role of reason, since anything that changes attitudes would count as a good reason",
      "It cannot explain why moral language carries emotional and persuasive force, since it treats moral talk as cold reports of fact",
      "It makes our sincere moral judgments infallible, since a report of one's own attitude can never be mistaken",
      "It relies on objective moral facts that would require a mysterious sixth sense to detect",
    ],
    e: [
      "Rachels says a moral judgment must be backed by good reasons, and the right judgment has the weight of reasons on its side. Emotivism reduces reasons to whatever persuades.",
      "Emotivism also struggles with moral reasoning and moral progress. Explaining emotional force is a strength of emotivism, not a weakness.",
    ],
  },
  {
    t: SU,
    q: "Which is a **strength** of emotivism?",
    c: [
      "It explains why moral language has persuasive power",
      "It proves that objective moral truths exist",
      "It shows how moral arguments follow logically from emotive premises",
      "It explains how societies genuinely improve morally over time",
    ],
    e: [
      "Emotional force is the strength. It also avoids the burden of proving objective moral truths exist.",
      "The last two choices are the persistent challenges listed for emotivism.",
    ],
  },
  {
    t: SU,
    q: "Which pairing of examples matches **normative subjectivism** and **metaethical subjectivism**?",
    c: [
      "Normative: “Chocolate is the best ice cream flavor.” Metaethical: “Lying is wrong, I disapprove of lying.”",
      "Normative: “Lying is wrong, I disapprove of lying.” Metaethical: “Chocolate is the best ice cream flavor.”",
      "Normative: “Lying is objectively wrong.” Metaethical: “Chocolate is the best ice cream flavor.”",
      "Normative: “Hurrah for Abraham Lincoln!” Metaethical: “Lying is wrong, I disapprove of lying.”",
    ],
    e: [
      "A taste claim like “Chocolate is the best” shows the normative view (it's best because I approve). “Lying is wrong, I disapprove of lying” shows the metaethical view (the moral statement is true because of my feeling).",
      "“Hurrah for Abraham Lincoln!” is the emotivism example.",
    ],
  },
  {
    t: SU,
    x: "**Normative subjectivism** is the moral theory that an action is right if the person judging it approves of it.",
    q: "Anna cheats on an exam because she believes passing matters more. Her teacher learns about it and judges the act. Under normative subjectivism, whose approval decides whether the act is right in that judgment?",
    c: [
      "The teacher's, since the teacher is the one judging",
      "Anna's, since she is the one who acted",
      "The class's, since most students would judge it",
      "The school's, since its honor code sets the rules",
    ],
    e: [
      "Normative subjectivism says an action is right if the person judging it approves of it. So if her teacher judges it, the teacher's approval decides, and if Anna judges it, hers does.",
      "That is why the same act could be “right” and “wrong” at once, depending on who judges.",
    ],
  },
  {
    t: SU,
    q: "Which stage comes **first** in the development of subjectivism?",
    c: [
      "Simple subjectivism, then emotivism as the improved version",
      "Emotivism, then simple subjectivism as the improved version",
      "Normative subjectivism, then metaethical subjectivism",
      "Emotivism, then cultural relativism as the improved version",
    ],
    e: [
      "The first stage is simple subjectivism. The second stage is emotivism, which Stevenson developed as an improved version that avoids its two main objections.",
    ],
  },
  {
    t: SU,
    q: "A student shouts, “Bullying is terrible!” to get classmates to stop picking on someone. Which function of moral language, according to emotivism, is the student mainly using?",
    c: [
      "Influencing others, by shaping behavior through the force of emotional language",
      "Expressing attitude, by reporting a fact about how the student feels",
      "Stating a fact, by describing an objective property of bullying",
      "Giving a command, by ordering the classmates to obey a school rule",
    ],
    e: [
      "Emotivism says moral language does two things: express the speaker's emotional stance and influence others. Aiming to stop the bullying is influencing.",
      "The second choice is a trap. Expressing an attitude is not reporting a fact about it, which is the simple subjectivism reading.",
    ],
  },
  {
    t: SU,
    q: "“Avoiding objectivism” is one reason emotivism matters. What does this mean?",
    c: [
      "It sidesteps the burden of proving that objective moral truths exist in the world",
      "It proves that objective moral truths do not exist anywhere in the world",
      "It shows that objective moral truths can be known through feelings",
      "It avoids moral disagreement by making everyone's feelings the same",
    ],
    e: [
      "Emotivism does not claim moral statements describe objective facts, so it never has to prove such facts exist. It does not prove they don't exist, either.",
    ],
  },
  {
    t: SU,
    q: "Which pairing of the **two objections** to simple subjectivism is correct?",
    c: [
      "Fallibility: people recognize past moral mistakes. Disagreement: speakers would only be stating tastes and talking past each other",
      "Fallibility: speakers would only be stating tastes and talking past each other. Disagreement: people recognize past moral mistakes",
      "Fallibility: moral arguments cannot follow from emotive premises. Disagreement: societies cannot improve morally",
      "Fallibility: moral language has too much emotional force. Disagreement: objective truths are hard to prove",
    ],
    e: [
      "Fallibility (the infallibility problem): we are fallible and change our minds, but simple subjectivism makes sincere reports impossible to get wrong. Disagreement: moral debates are real conflicts, but simple subjectivism turns them into people stating tastes.",
      "The third choice lists the persistent challenges to emotivism, not to simple subjectivism.",
    ],
  },
  {
    t: SU,
    x: "Under **simple subjectivism**, “X is wrong” just means “I disapprove of X.” So a sincere moral statement is true as long as the speaker really does disapprove. That makes it impossible to be mistaken about morality, which is the **fallibility objection**.",
    q: "In 2015, Rico sincerely said, “Bullying the new kid is fine.” In 2025 he says, “I was wrong back then.” What would simple subjectivism say about his 2015 statement?",
    c: [
      "It was true, since it correctly reported his approval then; he only changed his attitude",
      "It was false, since bullying is objectively wrong and Rico has now discovered that",
      "It was neither true nor false, since it only expressed his feelings like an exclamation",
      "It was false, since most people in 2015 disapproved of bullying the new kid",
    ],
    e: [
      "Simple subjectivism treats the statement as a report of his approval, which was accurate, so it was true. But we think Rico really was mistaken, and that is the fallibility objection.",
      "The third choice is how emotivism would see it, since emotivism says moral statements are not true or false at all.",
    ],
  },
  {
    t: SU,
    x: "Charles Stevenson noted that people can agree on all the facts yet still disagree, because they **want different things to happen**. He called this **disagreement in attitude**, as opposed to disagreement in belief.",
    q: "Two council members agree on every fact about a proposed mall: its cost, the jobs it creates, and the trees it would cut down. One says, “Build it!” and the other says, “Don't you dare!” What kind of disagreement is this, for an emotivist?",
    c: [
      "Disagreement in attitude, since they agree on the facts but want different outcomes",
      "Disagreement in belief, since one of them must be mistaken about the facts",
      "No real disagreement, since each is only reporting their own feelings",
      "Disagreement about objective moral truth, which only reason can settle",
    ],
    e: [
      "Since all the facts are agreed, any remaining clash is in attitude. Emotivism explains moral disagreement this way and so avoids the disagreement problem.",
      "The third choice is what simple subjectivism would be stuck saying.",
    ],
  },
  {
    t: SU,
    x: "Critics like Rachels argue that moral judgments need **good reasons** behind them. Under emotivism, though, a “good reason” is anything that successfully changes someone's attitude, including a lie or a scare tactic.",
    q: "A politician convinces voters that a policy is “evil” by spreading a false rumor, and their attitudes change. Why is this case a problem for emotivism?",
    c: [
      "Emotivism seems to count the rumor as a good reason, since it influenced attitudes",
      "Emotivism says the rumor is false, so the politician's claim is objectively wrong",
      "Emotivism cannot explain why the voters felt anything about the policy",
      "Emotivism says only the politician's own approval matters here",
    ],
    e: [
      "If moral talk is just about influencing attitudes, then whatever works counts. But we know a lie is not a good moral reason, so emotivism misses the role of reason in ethics.",
      "The last choice is simple subjectivism's reading, not emotivism's.",
    ],
  },
  {
    t: SU,
    x: "**Moral progress** is a persistent challenge for emotivism. If moral claims are only expressions of attitude, a change in moral views is only a change in feelings, so it is hard to say society got **better** rather than just **different**.",
    q: "A student says, “Society's move from accepting child labor to banning it was real moral improvement.” Which challenge does this pose for emotivism?",
    c: [
      "The moral progress challenge, since emotivism can only call it a change in attitudes",
      "The moral reasoning challenge, since the student gave no logical argument",
      "The fallibility objection, since the student might be mistaken about it",
      "The disagreement problem, since others may disagree with the student",
    ],
    e: [
      "To call a change an improvement, you need a standard beyond feelings. Emotivism has trouble supplying one.",
      "The fallibility and disagreement objections target simple subjectivism, the first stage, not emotivism.",
    ],
  },

  // ───────────────────────── Ethical Egoism ─────────────────────────
  {
    t: EG,
    q: "What is the difference between **psychological egoism** and **ethical egoism**?",
    c: [
      "Psychological egoism: people always do act from self-interest. Ethical egoism: people ought to",
      "Psychological egoism says people ought to act from self-interest; ethical egoism says people always do",
      "Psychological egoism concerns emotions; ethical egoism concerns reason",
      "They are the same theory under two names",
    ],
    e: [
      "Psychological egoism is descriptive: a claim about how people behave. Ethical egoism is normative: a claim about how people should behave.",
      "Even if psychological egoism were true, ethical egoism would not follow, since “is” does not imply “ought.”",
    ],
  },
  {
    t: EG,
    q: "Which statement about ethical egoism is **correct**?",
    c: [
      "It does not forbid helping others when doing so also serves your own interest",
      "It forbids helping others, since any help takes away from your own interest",
      "It tells you to do whatever gives you the most pleasure at the moment",
      "It says your interests and others' interests should count equally",
    ],
    e: [
      "Ethical egoism says pursue your own interest exclusively, but it allows helping others when interests coincide. It endorses selfishness, not foolishness, so it is about long-term interest, not momentary pleasure.",
      "The last choice describes impartial morality, which egoism rejects.",
    ],
  },
  {
    t: EG,
    q: "“Looking out for others is an offensive intrusion into their privacy, and making people the object of charity degrades them.” Which argument for ethical egoism is this?",
    c: [
      "The argument that altruism is self-defeating",
      "Ayn Rand's argument",
      "Ethical egoism as compatible with commonsense morality",
      "The efficiency argument from Adam Smith",
    ],
    e: [
      "The self-defeating argument says that if we try to be our brother's keeper we bungle the job, intrude on privacy, and degrade the people we help. So altruism defeats its own goal.",
      "The efficiency argument is close, since it says you know your own needs best, but the intrusion and degradation points mark the self-defeating argument.",
    ],
  },
  {
    t: EG,
    q: "Which argument says that because a person has only one life, an ethics of self-sacrifice fails to take the value of the individual seriously?",
    c: [
      "Ayn Rand's argument",
      "Kurt Baier's argument",
      "Hobbes' Golden Rule argument",
      "Rachels' arbitrariness argument",
    ],
    e: [
      "Rand, most fully in The Virtue of Selfishness (1964), argued that altruism treats your life as something to sacrifice, so it disregards the individual's worth.",
      "Baier and Rachels argued against egoism, not for it.",
    ],
  },
  {
    t: EG,
    q: "Thomas Hobbes suggested ethical egoism leads to the Golden Rule. Why?",
    c: [
      "If we do unto others, others are more likely to do unto us, so self-interest supports treating others well",
      "God commands us to love our neighbors, and obeying God is in our ultimate interest",
      "Treating others well always produces the greatest happiness for the greatest number",
      "Reason shows that our interests and the interests of others are equal, so we should treat them the same",
    ],
    e: [
      "This is the argument that egoism is compatible with commonsense morality: not harming, not lying, and keeping promises all serve our own interest.",
      "This links to Robert Axelrod's iterated prisoner's dilemma: when you deal with the same people repeatedly, reputation carries forward.",
    ],
  },
  {
    t: EG,
    q: "**Kurt Baier**, in The Moral Point of View (1958), argued against ethical egoism on what grounds?",
    c: [
      "It cannot resolve conflicts of interest, which is a main reason we need morality",
      "It is logically inconsistent, since it makes the same act both wrong and not wrong",
      "It is arbitrary, since it favors one person's interests with no relevant difference",
      "It endorses wicked actions, like a pharmacist watering down cancer drugs for profit",
    ],
    e: [
      "We need moral rules only because interests conflict. In the election example, only one of two candidates can win, and egoism just says “pursue your interest.” It cannot say who should get it.",
      "The logical inconsistency argument uses the same Mr. John and Mr. Fabs characters, which makes it the strongest trap.",
    ],
  },
  {
    t: EG,
    q: "In the Mr. John and Mr. Fabs example, egoism says it is John's duty to kill Fabs and Fabs' duty to stop him. Since it is wrong to prevent someone from doing their duty, it is both wrong and not wrong for Fabs to stop John. Which argument is this?",
    c: [
      "The argument that ethical egoism is logically inconsistent",
      "The argument that ethical egoism cannot handle conflicts of interest",
      "The argument that ethical egoism is unacceptably arbitrary",
      "The publicity or self-defeat argument",
    ],
    e: [
      "The argument ends in a contradiction: no act can be both wrong and not wrong. So the assumption that each person's duty is to do what is in their own interest cannot be true.",
      "The conflict-of-interest argument says egoism gives no guidance. This one says egoism contradicts itself.",
    ],
  },
  {
    t: EG,
    q: "Why does James Rachels compare ethical egoism to racism and sexism?",
    c: [
      "All three treat one group's interests as counting more without any relevant factual difference to justify it",
      "All three were widely accepted in the same historical period and were later rejected by society",
      "All three are based on biological facts about which people are naturally stronger",
      "All three produce more unhappiness than happiness, so they fail the test of utility",
    ],
    e: [
      "The arbitrariness argument, which Rachels presented as the deepest criticism: we can justify different treatment only if there is a relevant difference. Egoism says “my interests matter more” with no reason beyond “because they're mine.”",
      "Once we see we are on a par with others, morality must recognize their needs too.",
    ],
  },
  {
    t: EG,
    q: "“If everyone openly practiced pure self-interest, trust and cooperation would collapse, hurting even the egoist.” Which criticism is this?",
    c: [
      "The publicity or self-defeat argument",
      "The arbitrariness argument",
      "The argument that altruism is self-defeating",
      "The conflict-resolution argument",
    ],
    e: [
      "The publicity condition says a moral theory should still work when everyone knows and follows it openly. Egoism fails this because open egoism undermines its own goal.",
      "Don't confuse it with “altruism is self-defeating,” which is an argument for egoism.",
    ],
  },
  {
    t: EG,
    q: "A manager lets each employee choose their own sales approach because people know their own strengths best, and performance improves. Which argument for egoism does this illustrate?",
    c: [
      "The efficiency argument, rooted in Adam Smith's “invisible hand”",
      "Ayn Rand's individuality argument, from The Virtue of Selfishness",
      "Egoism as the foundation of ordinary morality, from Axelrod",
      "Kurt Baier's argument, from The Moral Point of View",
    ],
    e: [
      "The efficiency argument says decisions work best when made by the person with the most direct stake and knowledge, and self-interested action can unintentionally benefit society (The Wealth of Nations, 1776).",
    ],
  },
  {
    t: EG,
    q: "The word **egoism** comes from “ego.” What does “ego” mean?",
    c: ["“I” or “self”", "“Selfish” or “greedy”", "“Pleasure” or “desire”", "“Reason” or “mind”"],
    e: [
      "Ego means “I” or “self.” Egoism is placing importance on one's own interests. Ethical egoism is the theory that a person ought to act in their own self-interest.",
    ],
  },
  {
    t: EG,
    q: "Ethical theories can be compared by the main question each one asks. Which matching is correct?",
    c: [
      "Egoism: “What is ultimately best for me?” Utilitarianism: “What produces the greatest overall good?” Deontology: “What is my moral duty?”",
      "Egoism: “What produces the greatest overall good?” Utilitarianism: “What is ultimately best for me?” Deontology: “What is my moral duty?”",
      "Egoism: “What is ultimately best for me?” Utilitarianism: “What is my moral duty?” Deontology: “What produces the greatest overall good?”",
      "Egoism: “What is my moral duty?” Utilitarianism: “What produces the greatest overall good?” Deontology: “What is ultimately best for me?”",
    ],
    e: [
      "Egoism focuses on self-interest, utilitarianism on the overall good, deontology on duty and rules, and virtue ethics on character and values.",
    ],
  },
  {
    t: EG,
    q: "“You study for an exam instead of going out with your friends” is an example of what?",
    c: [
      "Self-interest, acting to promote your own long-term well-being and goals",
      "Selfishness, ignoring your friends' feelings for momentary pleasure",
      "Altruism, sacrificing your fun for the good of others",
      "Duty, following a rule regardless of what you want",
    ],
    e: [
      "Self-interest means acting in ways that promote one's own well-being, goals, happiness, or long-term benefit. Studying serves your long-term goal.",
      "This is why ethical egoism endorses self-interest, not mere foolishness or momentary pleasure.",
    ],
  },
  {
    t: EG,
    q: "Ethical egoism struggles with conflicting interests, harm to others, and short-term versus long-term thinking. Which of these problems is shown by “What benefits me today may hurt me tomorrow”?",
    c: ["Short-term versus long-term", "Conflicting interests", "Harm to others", "Ignoring collective welfare"],
    e: [
      "The three struggles are conflicting interests (my interest versus yours), harm to others (is an act right just because it benefits me?), and short-term versus long-term.",
    ],
  },
  {
    t: EG,
    q: "A small business owner never shortchanges customers, not from a sense of duty, but because in a small town reputation decides survival. Which argument for egoism does this illustrate?",
    c: [
      "Egoism as the foundation of ordinary morality",
      "The efficiency argument from Adam Smith",
      "Ayn Rand's individuality argument",
      "The argument that altruism is self-defeating",
    ],
    e: [
      "This argument says you don't need abstract duty to avoid stealing or lying, since getting caught costs freedom, reputation, and relationships. Self-interest alone explains why we follow moral rules.",
      "It traces to responses to Hobbes and to Robert Axelrod's 1980s game theory on the iterated prisoner's dilemma.",
    ],
  },
  {
    t: EG,
    q: "In debates about egoism, what does **iterated interaction** mean?",
    c: [
      "Dealing with the same people repeatedly, so reputation carries forward",
      "Dealing with many strangers once, so reputation does not matter",
      "Helping others only when they first help you",
      "Repeating the same action until it becomes a habit",
    ],
    e: [
      "Iterated interaction is why being honest pays: you will meet the same people again, so how you treated them follows you. This supports the claim that egoism explains ordinary morality.",
    ],
  },
  {
    t: EG,
    q: "Someone cuts a hospital line because “my time matters more,” but cannot give any reason beyond “because it's mine.” Which criticism of egoism does this example illustrate?",
    c: [
      "The arbitrariness argument",
      "The conflict-resolution argument",
      "The publicity or self-defeat argument",
      "The logical inconsistency argument",
    ],
    e: [
      "Arbitrary means a decision with no real justification. A relevant difference is a factual difference that actually matters for treatment. Egoism claims my interests matter more but can name no relevant difference.",
    ],
  },
  {
    t: EG,
    q: "Two siblings both want to inherit the family house. Egoism explains why each wants it but gives zero guidance on who should get it. Which property does egoism lack here?",
    c: [
      "It is not action-guiding, so it cannot resolve the conflict",
      "It fails the publicity condition, since the siblings know each other's aims",
      "It is arbitrary, since the siblings have no relevant difference",
      "It is self-defeating, since both siblings will lose the house",
    ],
    e: [
      "This is the conflict-resolution argument (Kurt Baier). An action-guiding theory actually tells you what to do instead of just describing what people want.",
    ],
  },
  {
    t: EG,
    q: "What is the **publicity condition** that the self-defeat argument says egoism fails?",
    c: [
      "A moral theory should still work even when everyone knows and follows it openly",
      "A moral theory should be taught publicly in schools and churches",
      "A moral theory should be accepted by the majority of the public",
      "A moral theory should make every person's actions visible to others",
    ],
    e: [
      "If everyone openly practiced pure self-interest, trust and cooperation would collapse, hurting everyone, including the egoist. A strategy that undermines its own goal is self-defeating.",
    ],
  },
  {
    t: EG,
    q: "You help a stranger because you believe people will help you when you need them someday. How would an ethical egoist describe this act?",
    c: [
      "A morally acceptable act of self-interest, since helping others here serves your own benefit",
      "A purely altruistic act, since you received nothing in return at the time you helped",
      "A morally wrong act, since egoism forbids helping strangers who give nothing back",
      "A foolish act, since egoism only allows pursuing what gives you pleasure right now",
    ],
    e: [
      "Ethical egoism does not forbid helping others when it creates a benefit for yourself. Expecting future help makes the act self-interested, and egoism approves of that.",
    ],
  },
  {
    t: EG,
    x: "In the **prisoner's dilemma**, two partners each do best by betraying the other, yet both do worse if both betray. Robert Axelrod's 1980s tournaments found that when the game is **repeated**, simple cooperative strategies like “tit for tat” win, because reputation carries forward.",
    q: "A tricycle driver near campus always charges students fairly, even when he could overcharge newcomers, because students talk and he relies on regular passengers. How would an ethical egoist explain his honesty?",
    c: [
      "Honesty serves his long-term self-interest, since he deals with the same people repeatedly",
      "Honesty is his moral duty, which he follows regardless of what it costs his business",
      "Honesty produces the greatest happiness for the greatest number of commuters",
      "Honesty is a virtue of character, which he practices because it is excellent",
    ],
    e: [
      "This is the “egoism as foundation of ordinary morality” argument: iterated interaction makes reputation valuable, so self-interest alone explains honest behavior.",
      "Each wrong choice is how a different theory would explain his honesty: deontology, utilitarianism, and virtue ethics.",
    ],
  },
  {
    t: EG,
    x: "**Ethical egoism** says a person ought to pursue their own self-interest. It is not the same as **selfishness in the moment**. Rachels notes egoism endorses selfishness, not foolishness, because a rational egoist considers long-term interests.",
    q: "An ethical egoist is offered a chance to cheat on a board exam with almost no chance of being caught, but it would leave them unprepared for actual work. What would a careful ethical egoist most likely conclude?",
    c: [
      "Don't cheat, since lacking real skill would hurt their long-term interest",
      "Cheat, since egoism says to grab every immediate personal benefit",
      "Don't cheat, since cheating is wrong whether or not it benefits them",
      "Cheat, since egoism ignores the interests of future patients or clients",
    ],
    e: [
      "Egoism weighs long-term benefit, and short-term versus long-term is a key tension. Being unprepared hurts the egoist later.",
      "The third choice reaches the same answer but for a deontological reason, not an egoist one.",
    ],
  },
  {
    t: EG,
    x: "James Rachels says we may treat people differently only if there is a **relevant difference** between them. Refusing someone a job because of their race is wrong because race is irrelevant to doing the job. Refusing because they lack the required license is not wrong.",
    q: "Rachels compares ethical egoism to racism. Which version of egoist reasoning shows exactly the flaw he means?",
    c: [
      "“My needs should come first simply because they are mine.”",
      "“I should look after myself, since I know my needs best.”",
      "“I help others because they will likely help me later.”",
      "“My life is all I have, so I shouldn't sacrifice it.”",
    ],
    e: [
      "“Because they are mine” names no relevant difference, so it is arbitrary, just like favoring people because of their race.",
      "The other choices are arguments for egoism (efficiency, ordinary morality, and Rand). They at least offer reasons.",
    ],
  },
  {
    t: EG,
    x: "Ayn Rand (1905–1982) fled the Soviet Union in 1926, after seeing a system that demanded individuals sacrifice themselves for the collective. In *The Virtue of Selfishness* (1964) she argued that altruism, meaning a duty to sacrifice your interests for others, treats your life as a resource for others.",
    q: "Bea is pressured to give up her scholarship abroad to run the family sari-sari store because “family comes first.” How would Rand's argument judge Bea choosing her scholarship?",
    c: [
      "Justified, since her one life is hers to live and not a resource for others",
      "Unjustified, since the family's combined happiness outweighs hers",
      "Unjustified, since God commands children to honor their parents above themselves",
      "Justified, but only if the family agrees to the decision first",
    ],
    e: [
      "A classic example of Rand's argument is a student pressured to give up their own career to run the family business. Rand says choosing your own future is justified.",
      "The second choice is utilitarian reasoning and the third is divine command reasoning. Neither is Rand's view.",
    ],
  },

  // ───────────────────────── Supernaturalism ─────────────────────────
  {
    t: SN,
    q: "Which claim is **not** one of the three claims of ethical supernaturalism?",
    c: [
      "Moral values are invented by each society to suit its needs",
      "Moral values exist objectively and independently of humans",
      "Moral values are grounded in God's nature or will",
      "Humans know moral truths through revelation, conscience, and reason guided by faith",
    ],
    e: [
      "Supernaturalism holds that morality comes from a reality beyond the natural world, usually God. Saying societies invent morality is cultural relativism, the opposite view.",
    ],
  },
  {
    t: SN,
    q: "“Science can't measure kindness or honesty, but we know they matter for living a good life.” Which foundation of supernaturalism does this example illustrate?",
    c: [
      "Scientific foundation",
      "Rational foundation",
      "Political foundation",
      "Logical/philosophical foundation",
    ],
    e: [
      "The scientific foundation holds that moral meaning and values go beyond what science can measure, so they need a higher, metaphysical source.",
      "The rational foundation is about morality needing a higher authority to stay objective, like knowing lying is wrong even when no one is watching.",
    ],
  },
  {
    t: SN,
    q: "“Leaders should not misuse power, because even those in authority are morally accountable.” Which foundation of supernaturalism is this?",
    c: [
      "Political foundation",
      "Scientific foundation",
      "Rational foundation",
      "Logical/philosophical foundation",
    ],
    e: [
      "The political foundation grounds justice and authority in divine moral law, so rulers are accountable too.",
    ],
  },
  {
    t: SN,
    q: "In supernaturalism, God as moral lawgiver is described with three attributes. Which matching is correct?",
    c: [
      "Omniscient: aware of all moral truths. Omnibenevolent: perfectly good. Just: guarantees moral accountability",
      "Omniscient: perfectly good. Omnibenevolent: aware of all moral truths. Just: guarantees moral accountability",
      "Omnipotent: aware of all moral truths. Omnipresent: perfectly good. Just: punishes all sins",
      "Omniscient: all-powerful. Omnibenevolent: everywhere. Just: forgiving",
    ],
    e: [
      "Omniscient means all-knowing, omnibenevolent means all-good, and just means God guarantees moral accountability.",
      "The second choice swaps the first two meanings.",
    ],
  },
  {
    t: SN,
    q: "Which of Aquinas' Five Ways argues that nothing moves itself and there can be no infinite regress of moved movers, “as the stick is moved by the hand”?",
    c: [
      "The First Mover (argument from motion/change)",
      "The First Cause (argument from efficient causation)",
      "The Necessary Being (argument from contingency)",
      "The Intelligent Designer (argument from order)",
    ],
    e: [
      "The first and “most open” way is from motion: whatever is in motion is moved by another, there can be no infinite series, so there must be an Unmoved Mover.",
      "The First Cause argument has the same structure but is about efficient causes of existence, not motion. That makes it the closest trap.",
    ],
  },
  {
    t: SN,
    q: "What is the difference between a **necessary being** and a **contingent being** in Aquinas' Third Way?",
    c: [
      "A necessary being must exist and exists on its own; a contingent being may or may not exist and cannot exist on its own",
      "A necessary being may or may not exist and depends on others; a contingent being must exist and exists on its own",
      "A necessary being receives its necessity from another; a contingent being causes the necessity in others",
      "A necessary being is the highest in goodness and truth; a contingent being has these only in lesser degrees",
    ],
    e: [
      "Contingent things are born and die away; they can be or not be. If everything were contingent, at some time nothing would exist, and nothing would exist now. So there must be a necessary being that causes the necessity in others.",
      "The last choice describes the Fourth Way (gradation), not the Third.",
    ],
  },
  {
    t: SN,
    q: "“Some things are truer, better, and nobler than others, so there must be something that is the maximum and cause of all perfection.” Which way is this?",
    c: [
      "The Highest Being (argument from gradation of goodness)",
      "The Intelligent Designer (argument from order)",
      "The Necessary Being (argument from contingency)",
      "The First Cause (argument from efficient causation)",
    ],
    e: [
      "The Fourth Way argues from degrees of goodness and truth to a highest being that is the standard and cause of all perfections.",
    ],
  },
  {
    t: SN,
    q: "Aquinas compares natural things acting toward an end to “the arrow directed by the archer.” Which way uses this image?",
    c: [
      "The Intelligent Designer (argument from order and purpose)",
      "The First Mover (argument from motion and change)",
      "The Highest Being (argument from gradation of goodness)",
      "The First Cause (argument from efficient causation)",
    ],
    e: [
      "Things lacking knowledge act for an end, almost always in the same way. Whatever lacks knowledge can reach an end only if directed by an intelligent being, as the arrow by the archer.",
      "The stick and hand image belongs to the First Mover. The two pictures are easy to mix up.",
    ],
  },
  {
    t: SN,
    q: "Which premise belongs to the **Kalam** argument presented with the First Cause?",
    c: [
      "Whatever begins to exist has a cause, and the universe began to exist",
      "Every beauty, order, or purpose must have an intelligent designer",
      "Some things are truer, better, and nobler than other things",
      "Nothing moves itself, and a series of movers cannot go on forever",
    ],
    e: [
      "Kalam: whatever begins to exist has a cause; the universe began to exist; therefore the universe has a cause.",
    ],
  },
  {
    t: SN,
    q: "According to **Divine Command Theory**, where does an action's morality come from?",
    c: [
      "From God's will and commands, so morality is not inherent in actions themselves",
      "From God, but built into human nature and discovered through reason",
      "From the rules rational people agree to follow for mutual benefit",
      "From the good consequences that God intends the action to produce",
    ],
    e: [
      "Divine Command Theory says ethical principles are based on the commands of God or gods, so morality depends on divine will.",
      "The second choice is natural law, which is related but different: it says God built morality into nature and we discover it by reason.",
    ],
  },
  {
    t: SN,
    q: "The **Euthyphro dilemma** against Divine Command Theory forces a choice between two horns. Which pair is correct?",
    c: [
      "If acts are good because God commands them, morality is arbitrary; if God commands them because they are good, goodness is independent of God",
      "If God exists, morality is objective and universal; if God does not exist, morality is only relative to each culture",
      "If scripture is clear, morality is fixed for everyone; if scripture needs interpretation, morality varies with the interpreter",
      "If all religions agree, morality is universal; if their commands conflict, there is no single divine morality",
    ],
    e: [
      "Horn one: anything could be right if commanded. Horn two: goodness has a standard apart from God, so morality is not really grounded in the divine.",
      "The last two choices describe the other critiques: interpretation of sacred texts, and moral pluralism and religious conflict.",
    ],
  },
  {
    t: SN,
    q: "How does **natural law theory** differ from divine command theory?",
    c: [
      "Natural law comes from God but is discovered through human reason, since it is built into nature",
      "Natural law rejects God as a source and relies only on what science observes in nature",
      "Natural law says morality is whatever God commands, as revealed through scripture and prophets",
      "Natural law says morality is whatever a society's human laws require, even if they are unjust",
    ],
    e: [
      "Aquinas' natural law comes from God, but God gave us reason to figure it out ourselves. Morals are inherent in nature and bind regardless of society's laws.",
      "That is why natural law theorists say “an unjust law is no law at all.”",
    ],
  },
  {
    t: SN,
    x: "Thomas Aquinas' **natural law theory** holds that God built moral principles into nature, and we discover them through reason. It identifies seven basic goods that human beings naturally seek.",
    q: "Which is **not** among the seven basic goods of natural law?",
    c: [
      "Pursue pleasure",
      "Shun ignorance",
      "Live in society",
      "Educate offspring",
    ],
    e: [
      "The seven are life, reproduction, educating offspring, seeking God, living in society, avoiding offense, and shunning ignorance.",
      "Pleasure as the good belongs to hedonism, not natural law.",
    ],
  },
  {
    t: SN,
    q: "The **is-ought problem** (naturalistic fallacy) raised against natural law says that:",
    c: [
      "just because something is so in nature does not mean we ought to act on it",
      "just because God commands something does not by itself prove that it is good",
      "just because a culture approves of a practice does not by itself make it right",
      "just because an act produces pleasure does not by itself make that act good",
    ],
    e: [
      "You cannot get an “ought” from an “is” alone. A fact about nature does not by itself prove a moral duty.",
      "The other choices are real objections to other theories, so they look plausible, but they are not the is-ought problem.",
    ],
  },
  {
    t: SN,
    q: "Which quote comes from John Paul II's **Fides et Ratio** (1998)?",
    c: [
      "“Faith without reason leads to superstition and reason without faith leads to nihilism”",
      "“Science without religion is lame, religion without science is blind”",
      "“Faith without reason leads to nihilism and reason without faith leads to superstition”",
      "“Faith and reason are opposed, so one must choose”",
    ],
    e: [
      "Faith without reason becomes superstition, and reason without faith becomes nihilism. The third choice swaps the ending.",
      "“Science without religion is lame…” is Albert Einstein (1954).",
    ],
  },
  {
    t: SN,
    q: "Which statement best defines **supernaturalism** as a moral theory?",
    c: [
      "The moral theory that ethical principles originate from a reality beyond the natural, physical world",
      "The moral theory that ethical principles are discovered by science in the natural, physical world",
      "The moral theory that ethical principles are created by each culture to meet its needs",
      "The moral theory that ethical principles come from the agreements of rational people",
    ],
    e: [
      "That reality is usually understood as God, but may also include divine beings, sacred forces, or transcendent moral orders.",
    ],
  },
  {
    t: SN,
    q: "“You know it's wrong to lie even when no one is watching, because moral rules exist beyond what people say.” Which foundation of supernaturalism does this illustrate?",
    c: [
      "Rational foundation",
      "Political foundation",
      "Scientific foundation",
      "Logical/philosophical foundation",
    ],
    e: [
      "The rational foundation holds that morality must come from a higher authority to stay objective and universal.",
      "The logical/philosophical foundation is close, but its example is that stealing is wrong even if someone believes they deserve the item.",
    ],
  },
  {
    t: SN,
    q: "Which critique of Divine Command Theory points out that scriptures were written in ancient languages and shaped by historical and cultural contexts?",
    c: [
      "Interpretation problems of sacred texts",
      "The Euthyphro dilemma",
      "Moral pluralism and religious conflict",
      "The is-ought problem",
    ],
    e: [
      "Since moral guidance comes through scripture passed down by interpretive traditions, it is hard to know what God actually commands.",
      "Moral pluralism is about different religions prescribing different norms, not about reading one text.",
    ],
  },
  {
    t: SN,
    q: "Divine Command Theory implies that morality is:",
    c: [
      "contingent on divine will, not inherent in actions themselves",
      "inherent in actions themselves and discovered by reason",
      "dependent on the consequences that God foresees",
      "decided by the religious community through agreement",
    ],
    e: [
      "Divine Command Theory says actions are right or wrong because God commands or forbids them, not because of anything in the actions. This is what opens it to the Euthyphro dilemma.",
    ],
  },
  {
    t: SN,
    x: "In Plato's dialogue *Euthyphro*, Socrates asks: “Is the pious loved by the gods because it is pious, or is it pious because it is loved by the gods?” Modern philosophers apply the same question to God and morality. Hence the **Euthyphro dilemma**.",
    q: "A student says, “Cruelty is wrong only because God forbids it. If God had commanded cruelty, it would be right.” Which horn of the Euthyphro dilemma is the student accepting?",
    c: [
      "The horn that makes morality arbitrary, depending entirely on what God happens to command",
      "The horn that makes goodness independent of God, since God forbids what is already wrong",
      "Neither horn, since the student is appealing to natural law discovered by reason",
      "Both horns at once, since God's commands and goodness are always the same thing",
    ],
    e: [
      "If anything commanded would be right, morality becomes arbitrary. That is the first horn. The second horn says God commands things because they are good, which makes goodness independent of God.",
    ],
  },
  {
    t: SN,
    x: "Natural law theorists like Thomas Aquinas held that human laws get their authority from the moral law built into nature. Hence the saying “**an unjust law is no law at all**.” Martin Luther King Jr. quoted this idea in his 1963 *Letter from Birmingham Jail*.",
    q: "A town passes an ordinance forbidding residents from giving food to the homeless. A natural law theorist would most likely say:",
    c: [
      "The ordinance lacks real moral authority, since it violates the natural good of preserving life",
      "The ordinance must be obeyed, since any law passed by the proper authority is binding",
      "The ordinance is right if most residents approve, since morality comes from society",
      "The ordinance is right if God commands it in scripture, whatever reason says",
    ],
    e: [
      "Life is one of the seven basic goods, and an unjust law is no law at all. Natural law binds regardless of society's laws or norms.",
      "The last choice is divine command theory, which relies on commands, not reason.",
    ],
  },
  {
    t: SN,
    x: "The **is-ought problem** comes from David Hume (1711–1776), who noticed that writers often move from statements about what **is** to claims about what **ought** to be without explaining how. It is raised against natural law, which reads moral duties off nature.",
    q: "Someone argues, “In nature, the strongest animals dominate the weak, so it is right for strong people to dominate weaker ones.” What is wrong with this reasoning, according to the is-ought problem?",
    c: [
      "A fact about how nature is does not by itself show how we ought to act",
      "The premise is false, because animals in nature never dominate each other",
      "It confuses what God commands with what reason can discover",
      "It makes morality depend on the culture where the argument is made",
    ],
    e: [
      "Even if the premise is true, the moral conclusion doesn't follow without more argument.",
      "This is the same weakness critics point to when natural law treats natural drives as moral rules.",
    ],
  },
  {
    t: SN,
    x: "**Moral pluralism** is the observation that different religions and traditions prescribe different moral norms. This is a problem for divine command theory: if morality comes from divine commands, which tradition's commands are the real ones?",
    q: "Two religions give opposite rules about whether eating pork is forbidden. Which critique of divine command theory does this illustrate?",
    c: [
      "Moral pluralism and religious conflict, since divine commands conflict between traditions",
      "Interpretation problems of sacred texts, since one scripture can be read in different ways",
      "The Euthyphro dilemma, since God's commands would then be arbitrary",
      "The is-ought problem, since what God commands is not what nature shows",
    ],
    e: [
      "Two traditions with conflicting commands is moral pluralism. Interpretation problems would be about different readings of the same text.",
    ],
  },

  // ───────────────────────── Consequentialism ─────────────────────────
  {
    t: UT,
    q: "What is **consequentialism**?",
    c: [
      "The view that whether an act is right depends only on its consequences, or something related to them",
      "The view that an act is right if it follows duty regardless of its consequences",
      "The view that whether an act is right depends only on the character of the agent who performs it",
      "The view that whether an act is right depends only on the motive and the means used, not on its results",
    ],
    e: [
      "Consequentialism says normative properties depend only on consequences (Sinnott-Armstrong 2021).",
      "The second choice is deontology, its main rival.",
    ],
  },
  {
    t: UT,
    q: "**Hedonism** holds that:",
    c: [
      "pleasure is the only intrinsic good and pain the only intrinsic bad, so other goods matter only as means",
      "pleasure is one intrinsic good among others, like freedom, knowledge, and life, which are good in themselves",
      "an act is right if and only if it causes the greatest happiness for the greatest number of people",
      "virtue is the only intrinsic good, and pleasure is good only when it follows from virtuous action",
    ],
    e: [
      "Intrinsic means good by nature, for its own sake. Hedonism makes pleasure the only such good.",
      "The third choice is utilitarianism, which builds on hedonism but adds the greatest number.",
    ],
  },
  {
    t: UT,
    q: "Why is utilitarianism called consequentialist **as opposed to** deontological?",
    c: [
      "It denies rightness depends directly on anything but consequences",
      "It says consequences matter, but only after duties are fulfilled",
      "It says the motive behind the act is all that matters",
      "It treats moral rules as absolute and binding",
    ],
    e: [
      "Utilitarianism is the paradigm, or typical, case of consequentialism. What sets it apart from deontology is what it denies: that anything but consequences directly decides rightness.",
    ],
  },
  {
    t: UT,
    q: "What is the difference between **act** and **rule** utilitarianism?",
    c: [
      "Act utilitarianism judges each act by its consequences; rule utilitarianism follows rules that generally produce the most happiness",
      "Act utilitarianism follows rules that generally produce happiness; rule utilitarianism judges each act separately",
      "Act utilitarianism measures the happiness of the individual agent; rule utilitarianism measures the happiness of society",
      "Act utilitarianism judges acts by the pleasure they produce; rule utilitarianism judges them by the duty they fulfill",
    ],
    e: [
      "Act: evaluate this act's outcomes. Rule: evaluate the rule the act falls under, and follow rules that tend to produce the most happiness.",
      "The third choice confuses this with Montemayor's individual versus social utilitarianism.",
    ],
  },
  {
    t: UT,
    q: "In Montemayor's classification, **individual utilitarianism** is also called:",
    c: [
      "Egoistic utilitarianism, or simply egoism",
      "Altruistic utilitarianism, or simply altruism",
      "Rule utilitarianism",
      "Universal consequentialism",
    ],
    e: [
      "Individual (egoistic) utilitarianism: good is what produces the individual's happiness. Social (altruistic) utilitarianism: good is what is conducive to social well-being.",
    ],
  },
  {
    t: UT,
    q: "Which pairing of the classic utilitarians and their labels is correct?",
    c: [
      "Bentham the Architect, Mill the Refiner, Sidgwick the Systematizer",
      "Bentham the Refiner, Mill the Architect, Sidgwick the Systematizer",
      "Bentham the Systematizer, Mill the Refiner, Sidgwick the Architect",
      "Bentham the Architect, Mill the Systematizer, Sidgwick the Refiner",
    ],
    e: [
      "Bentham (1748–1832) founded classical utilitarianism. Mill (1806–1873), Bentham's godson, refined it with qualitative hedonism. Sidgwick (1838–1900) systematized it in The Methods of Ethics (1874).",
    ],
  },
  {
    t: UT,
    q: "Bentham believed people are naturally motivated by their own pleasure and pain. Yet his moral standard was the happiness of **everyone affected**. What does this show?",
    c: [
      "He held psychological egoism about motivation but utilitarianism as the moral standard",
      "He was an ethical egoist who thought people should pursue only their own pleasure",
      "He held that people seek pleasure but that the moral standard is duty, not happiness",
      "He held individual utilitarianism, where only the happiness of the agent counts morally",
    ],
    e: [
      "This contrasts psychological egoism (how people are motivated) with ethical utilitarianism (the moral standard). Bentham held both: people seek their own pleasure, but the right act maximizes everyone's.",
    ],
  },
  {
    t: UT,
    q: "In Bentham's felicific calculus, what is the difference between **fecundity** and **purity**?",
    c: [
      "Fecundity is the chance more of the same sensation follows; purity is the chance no opposite sensation follows",
      "Fecundity is the chance it is not followed by pain; purity is the chance it is followed by more pleasure",
      "Fecundity is how many people the pleasure will reach; purity is how strong and intense the pleasure itself is",
      "Fecundity is how soon the pleasure will occur; purity is how likely it is that the pleasure will occur at all",
    ],
    e: [
      "Fecund means fruitful: more of the same follows. Pure means unmixed: no opposite sensation follows.",
      "The other variables are intensity (how strong), duration (how long), certainty (how likely), propinquity (how soon), and extent (how many people).",
    ],
  },
  {
    t: UT,
    q: "In the felicific calculus, **propinquity** measures:",
    c: [
      "How soon the pleasure will occur",
      "How many people the pleasure will affect",
      "How long the pleasure will last",
      "How likely the pleasure is to occur",
    ],
    e: [
      "Propinquity, or remoteness, is nearness in time. Extent is how many people, duration is how long, and certainty is how likely.",
    ],
  },
  {
    t: UT,
    q: "Why did Bentham call natural rights “nonsense upon stilts”?",
    c: [
      "He thought they lacked objective grounding, so he turned to legal reform for public welfare",
      "He thought they were grounded in God and religion, which he believed belonged outside of law",
      "He thought they were so obvious that writing laws to defend them was a waste of effort",
      "He thought only the majority had real rights, so minorities could not claim any",
    ],
    e: [
      "Bentham wanted morality and law on a scientific, objective basis, not tradition or religion. Natural rights looked to him like an ungrounded fiction.",
    ],
  },
  {
    t: UT,
    q: "How did **Mill's** hedonism differ from **Bentham's**?",
    c: [
      "Mill ranked some pleasures higher in quality, while Bentham measured all pleasures by quantity",
      "Mill treated all pleasures as quantitatively comparable, while Bentham ranked them by quality",
      "Mill rejected pleasure as the standard and replaced it with duty, while Bentham kept pleasure",
      "Mill ranked bodily pleasures highest, while Bentham ranked intellectual pleasures highest",
    ],
    e: [
      "Mill's qualitative hedonism: intellectual, moral, and aesthetic pleasures are higher in kind. Hence “better to be Socrates dissatisfied than a fool satisfied.” Bentham only measured amounts.",
    ],
  },
  {
    t: UT,
    q: "Mill's **harm principle** in On Liberty says society may restrict a person's liberty only to:",
    c: [
      "prevent harm to others, not for the person's own good or to enforce morals",
      "prevent harm to the person themselves, even if others are unaffected",
      "enforce the moral conventions that the majority of society holds",
      "maximize the total pleasure of society, even against the person's will",
    ],
    e: [
      "Interfering for the person's own good is paternalism, and enforcing moral conventions is legal moralism. Mill rejects both as reasons to restrict liberty.",
    ],
  },
  {
    t: UT,
    q: "Sidgwick's **dualism of practical reason** is the conclusion that:",
    c: [
      "rational self-interest and universal benevolence both seem justified, and neither can be proven to always override the other",
      "pleasure and pain are the only two things that have value, and each must be weighed against the other",
      "act and rule utilitarianism seem equally rational, and he found no way to show one is better",
      "reason and emotion both have a claim on moral decisions, and neither can be proven to override the other",
    ],
    e: [
      "Sidgwick compared egoism (rational self-love), intuitionism (commonsense morality), and utilitarianism. Egoism and utilitarianism both seemed rational, which left an unresolved tension that is still debated.",
    ],
  },
  {
    t: UT,
    x: "Early critics mocked utilitarianism as “a doctrine worthy only of swine,” because putting pleasure at the center of morality seemed to reduce humans to animals chasing bodily gratification.",
    q: "How do utilitarians answer the charge that their theory is “worthy only of swine”?",
    c: [
      "It appeals to mental pleasures (intellectual, spiritual, moral), which are higher than mere bodily gratification",
      "It rejects pleasure as the standard and replaces it with the higher duty of serving others",
      "It admits that it appeals to physical pleasures, but argues that humans deserve these as much as animals",
      "It counts only the agent's own pleasure, which keeps the agent from becoming like a beast",
    ],
    e: [
      "The objection assumes pleasure means bodily pleasure. Utilitarians answer that human beings have higher faculties, and the theory promotes the higher, distinctly human pleasures.",
    ],
  },
  {
    t: UT,
    q: "Which utilitarian rule of morality does **“The Case of the Prank Caller”** illustrate?",
    c: [
      "If an act unintentionally produces the greatest happiness, it is still morally good",
      "If an act ends in unhappiness, it is wrong even if it intended the greatest happiness",
      "If an act produces the greatest happiness for the greatest number, whatever means it used is justified",
      "If an act was meant well, it is good regardless of its outcome",
    ],
    e: [
      "The three rules are tied to three cases: Killer Milk (good intention, bad result, so wrong), Dr. Robinhood (good result justifies the means), and Prank Caller (accidental good result is still good).",
      "The last choice is a deontological idea. Utilitarians judge by results, not intentions.",
    ],
  },
  {
    t: UT,
    q: "**“The Case of the Killer Milk”** illustrates which utilitarian rule?",
    c: [
      "If an act ends in unhappiness, it is wrong even if it was meant to bring the greatest happiness",
      "If an act unintentionally produces the greatest happiness, it is still morally good",
      "If the end is the greatest happiness of the greatest number, any means used is justified",
      "An act is wrong only if the agent intended to cause unhappiness to others",
    ],
    e: [
      "Under utilitarianism, intention does not save an act whose outcome is unhappiness. That is rule 1.",
    ],
  },
  {
    t: UT,
    q: "Which is usually considered the **most serious** problem of utilitarianism?",
    c: [
      "It puts a number on human dignity, so the happiness of fifty could justify taking the life of one",
      "It requires counting everyone who benefits and suffers, so in fast decisions we end up doing nothing or acting too late",
      "It gives no clear basis for why the many should prevail over the few, which can lead to tyranny of the majority",
      "It aims only at an earthly goal, welfare in this life, while man's ultimate purpose lies beyond this life",
    ],
    e: [
      "All four are criticisms, but the most serious is quantifying human dignity, treating persons as mere numbers, as the most serious.",
      "The third choice is related (tyranny of the majority), but it is a separate point.",
    ],
  },
  {
    t: UT,
    q: "Montemayor says hedonism and utilitarianism “mistake the indicative for the constitutive.” What does this mean?",
    c: [
      "An act is not good because it satisfies; it satisfies because it is good, so pleasure signals goodness but does not make it",
      "An act is good because it brings satisfaction, and the satisfaction is what makes it good",
      "Pleasure and goodness are unrelated, so an act can be good without ever bringing any satisfaction",
      "Only acts that indicate future pleasure are good, so we must judge acts by the satisfaction they promise",
    ],
    e: [
      "Like mistaking the symptom for the disease: pleasure follows from goodness, not goodness from pleasure. This is why Montemayor calls utilitarian morality extrinsic, while morality is really intrinsic to the act.",
      "The second choice is the utilitarian view being criticized.",
    ],
  },
  {
    t: UT,
    q: "What makes **universal consequentialism** the broadest form of consequentialism?",
    c: [
      "Rightness depends on the consequences for all people and all sentient beings, not a limited group",
      "It applies the same moral rules to every culture and every time period, without exception",
      "It counts only pleasure and pain as consequences, ignoring freedom, knowledge, and life",
      "It judges both each individual act and the general rules it falls under at the same time",
    ],
    e: [
      "Universal consequentialism widens who counts: everyone who can feel pleasure or pain, including future people and animals.",
    ],
  },
  {
    t: UT,
    q: "Which is listed as a **positive contribution** of utilitarianism to the workplace?",
    c: [
      "It justifies workers' demands for better wages and fair treatment, since workers are the greater number",
      "It justifies keeping wages low, since higher profits for the company benefit the whole economy",
      "It shows that the interests of the few owners must prevail, because they create the jobs for the many",
      "It removes the need for policies to have popular support, since experts can calculate the best outcome",
    ],
    e: [
      "Because workers are the greater number, their demands lead to the greatest happiness. It also helps employers, since policies that consider the many are more likely to be supported and to succeed.",
    ],
  },
  {
    t: UT,
    x: "Utilitarians divide pleasure into **physical** pleasures (bodily gratifications) and **mental** pleasures (intellectual, spiritual, and moral), and they consider mental pleasures higher.",
    q: "Which is an example of **physical** rather than mental pleasure?",
    c: ["Sleeping", "Social recognition", "Feeling of self-worth", "Peace and security"],
    e: [
      "Physical pleasures are sensual indulgences like eating, drinking, sleeping, and sexual intercourse. Mental pleasures include free will, intellect, social recognition, self-worth, peace, and security.",
    ],
  },
  {
    t: UT,
    q: "Which utilitarian rule of morality does **“The Case of Dr. Robinhood”** illustrate?",
    c: [
      "If an act produces the greatest happiness for the greatest number, whatever means it used is justified",
      "If an act unintentionally produces the greatest happiness, it is still morally good",
      "If an act ends in unhappiness, it is wrong even if it was meant to make many people happy",
      "If an act was done from a good motive and by good means, it is good whatever its result",
    ],
    e: [
      "Like Robin Hood, the means may be questionable, but the theory says the result justifies it. That is rule 2.",
    ],
  },
  {
    t: UT,
    q: "Which is **not** a common objection to Bentham's felicific calculus?",
    c: [
      "It ignores how many people a pleasure affects",
      "How do you compare pleasure across people?",
      "Is all pleasure really measurable?",
      "How do we handle incommensurable goods like friendship or money?",
    ],
    e: [
      "The calculus does count how many people are affected. That is the extent variable. The three issues raised are comparing across people, measurability, and incommensurable goods.",
    ],
  },
  {
    t: UT,
    q: "In The Methods of Ethics, which three methods did Sidgwick systematically compare?",
    c: [
      "Egoism (rational self-love), intuitionism (common-sense morality), and utilitarianism",
      "Hedonism, utilitarianism, and universal consequentialism (all people and sentient beings)",
      "Act utilitarianism, rule utilitarianism, and egoistic (individual) utilitarianism",
      "Deontology (duty), virtue ethics (character), and utilitarianism",
    ],
    e: [
      "He tried to see whether the three could be reconciled into one coherent system, and concluded that egoism and utilitarianism both seemed rationally justified: the dualism of practical reason.",
      "The second choice lists the three forms of consequentialism, not Sidgwick's methods.",
    ],
  },
  {
    t: UT,
    q: "How did Mill connect **justice** and **utility**?",
    c: [
      "He grounded justice in utility, arguing that justice protects the most vital human interests, like security",
      "He argued that justice and utility are opposed, so justice must sometimes override happiness",
      "He argued that justice is a natural right that exists apart from utility",
      "He argued that justice is whatever the law requires at a given time",
    ],
    e: [
      "For Mill, certain moral rules are paramount because they are so essential to social well-being. So justice is part of utility, not opposed to it.",
      "The third choice is the natural-rights view that Bentham called “nonsense upon stilts.”",
    ],
  },
  {
    t: UT,
    q: "Utilitarianism is called the **paradigm** case of consequentialism. What does “paradigm” mean here?",
    c: [
      "A typical example or common pattern",
      "The only true form of a theory",
      "The earliest historical version",
      "An exception that breaks the rule",
    ],
    e: [
      "A paradigm is a typical example or a common pattern. Utilitarianism is the standard example of a consequentialist theory, not the only one.",
    ],
  },
  {
    t: UT,
    x: "Bentham's **felicific calculus** scores a pleasure on seven circumstances: intensity, duration, certainty, propinquity (how soon), fecundity (more of the same follows), purity (no pain follows), and extent (how many people).",
    q: "Option A: a party tonight that is very fun but leaves you with a hangover. Option B: a reading club whose enjoyment keeps leading to more enjoyment and causes no pain. On which two circumstances does Option B clearly beat Option A?",
    c: [
      "Fecundity and purity",
      "Intensity and propinquity",
      "Duration and extent",
      "Certainty and intensity",
    ],
    e: [
      "Fecundity: B's pleasure leads to more pleasure. Purity: B is not followed by pain, while the party brings a hangover.",
      "The party probably wins on intensity and propinquity (it's tonight), which is why those choices are traps.",
    ],
  },
  {
    t: UT,
    x: "Mill's **harm principle** (*On Liberty*, 1859): the only legitimate reason to restrict someone's liberty is to prevent harm to **others**. Restricting someone for their own good is **paternalism**, and enforcing a moral convention is **legal moralism**. Mill rejects both as grounds.",
    q: "Which law would Mill's harm principle **most clearly** support?",
    c: [
      "Banning drunk driving, since it endangers other people on the road",
      "Banning smoking at home alone, since it damages the smoker's health",
      "Banning unusual hairstyles, since most people find them improper",
      "Banning dangerous hobbies, since they may hurt the person doing them",
    ],
    e: [
      "Drunk driving threatens harm to others, which is the one ground Mill accepts. Banning smoking alone or dangerous hobbies is paternalism, and banning hairstyles is legal moralism.",
    ],
  },
  {
    t: UT,
    x: "Under **act utilitarianism**, you judge each individual act by its consequences. Under **rule utilitarianism**, you follow the rules that generally produce the greatest happiness, even when breaking the rule once might seem to produce more.",
    q: "A doctor could secretly take one healthy patient's organs to save five dying patients. A rule utilitarian would most likely reject this because:",
    c: [
      "A general rule allowing doctors to do this would destroy trust in hospitals and cause more unhappiness",
      "This single act produces less total happiness than simply letting the five patients die",
      "Killing an innocent person is always wrong as a matter of duty, whatever the consequences",
      "The doctor would be acting out of character, since a virtuous doctor would never do it",
    ],
    e: [
      "Rule utilitarianism asks what would happen if the practice became a general rule: people would avoid hospitals, and overall happiness would fall.",
      "The third choice is deontological and the fourth is virtue ethics. The second gets act utilitarianism wrong, since this single act might seem to produce more happiness, which is the whole worry.",
    ],
  },
  {
    t: UT,
    x: "Critics warn that utilitarianism can lead to the **tyranny of the majority**: if the happiness of many outweighs the suffering of a few, the theory seems to allow violating the rights of a minority whenever the numbers favor it.",
    q: "A town votes to evict a small, harmless minority group because most residents would feel happier without them. Which criticism of utilitarianism does this case illustrate?",
    c: [
      "It gives no clear basis why the many should prevail, allowing a tyranny of the majority",
      "It requires too much calculating, so the town would act too late to decide anything",
      "It aims only at an earthly goal, while man's ultimate end lies beyond this life",
      "It mistakes the indicative for the constitutive, confusing pleasure with goodness",
    ],
    e: [
      "The question is what gives the many the moral right to violate the interests of the few. The majority can run over the few.",
      "The other choices are real criticisms, but none fits this case as directly.",
    ],
  },
];
