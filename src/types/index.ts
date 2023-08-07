import {NAV_ITEMS} from "@/types/enums";

export interface IPolls {
  id: number,
  question: string,
  answerA: string,
  answerB: string,
  votesA: number,
  votesB: number,
}

export interface IItem {
  item: NAV_ITEMS
}

export type OptionType = 'a' | 'b'

export interface IFields {
  question: string
  answerA: string
  answerB: string
}

export type Nullable<T> = T | null
