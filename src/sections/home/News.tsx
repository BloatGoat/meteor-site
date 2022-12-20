import NewsBadge from '@/components/news/Badge';
import { News } from '@/types/News';
import SectionTitle from '../../components/section/Title';
import { forwardRef } from 'react';

type NewsSectionProps = {
  news: News[];
};

const NewsSection = forwardRef<HTMLElement, NewsSectionProps>((props, ref) => {
  return (
    <section className="bg-blackground2 pb-24" id="updates" ref={ref}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <SectionTitle title="Latest news" />
        </div>
        <ol className="relative border-l border-persian-green-400">
          {props.news.map((newsItem: News) => {
            return (
              <li className="ml-4" key={newsItem.title}>
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-persian-green-500 bg-persian-green-400"></div>
                <time className="mb-1 text-sm font-normal leading-none text-persian-green-400">
                  {newsItem.date}
                </time>
                <h3 className="text-lg font-semibold text-white">
                  <NewsBadge type={newsItem.type} />
                  {newsItem.title}
                </h3>
                {newsItem.description ? (
                  <p className="mb-4 text-base font-normal text-slate-300">
                    {newsItem.description}
                  </p>
                ) : (
                  <br />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});
NewsSection.displayName = `NewsSection`;

export default NewsSection;
