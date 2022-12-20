import { News, NewsType } from '@/types/News';

const newsData: News[] = [
  {
    date: `18/12/2022`,
    type: NewsType.Client,
    title: `Fixed item prices`,
    description: `A bug causing items to not display the text or Grand Exchange price when examined has been fixed.`,
  },
  {
    date: `13/12/2022`,
    type: NewsType.Client,
    title: `Prevent showing input during keyboard bank pin`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    date: `11/12/2022`,
    type: NewsType.Plugin,
    title: `Added auto eater plugin`,
  },
  {
    date: `10/12/2022`,
    type: NewsType.Plugin,
    title: `Added kebab buyer plugin`,
  },
];

export default newsData;
