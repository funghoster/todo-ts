export interface ITimer {
  min: number;
  sec: number;
}
export interface ITaskParam {
  label: string;
  min: number | string;
  sec: number | string;
}
export interface ITodo {
  id: number;
  label: string;
  completed: boolean;
  editing: boolean;
  timer: ITimer;
}
