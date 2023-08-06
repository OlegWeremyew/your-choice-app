import {writable} from 'svelte/store';
import type {IPolls} from "@/types";

export const pollStore = writable<IPolls[]>([
  {
    id: 1,
    question: "Python or JavaScript",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "Java or C#",
    answerA: "Java",
    answerB: "C#",
    votesA: 39,
    votesB: 11,
  },
  {
    id: 3,
    question: "Python or JavaScript",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 4,
    question: "Java or C#",
    answerA: "Java",
    answerB: "C#",
    votesA: 39,
    votesB: 11,
  },
  {
    id: 5,
    question: "Python or JavaScript",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 6,
    question: "Java or C#",
    answerA: "Java",
    answerB: "C#",
    votesA: 39,
    votesB: 11,
  },
])
