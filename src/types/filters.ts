export enum EFiltersTodo {
  all,
  active,
  completed,
}

export interface IFilterButton {
  filter: EFiltersTodo;
  label: string;
}
