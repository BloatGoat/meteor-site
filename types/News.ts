export enum NewsType {
  Client = `Client`,
  Plugin = `Plugin`,
  Other = `Other`,
}

export interface News {
  date: string;
  type: NewsType;
  title: string;
  description?: string;
  url?: string;
}
