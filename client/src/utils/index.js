import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  // make sure we arent getting the same prompts
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
