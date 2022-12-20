import { Feature } from '@/types/Feature';
import SectionTitle from '@/components/section/Title';
import { forwardRef } from 'react';

type FeaturesSectionProps = {
  features: Feature[];
};

const FeaturesSection = forwardRef<HTMLElement, FeaturesSectionProps>(
  (props, ref) => {
    return (
      <section className="bg-blackground" id="features" ref={ref}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <SectionTitle title="Features" />
            <p className="text-slate-300 sm:text-xl">
              <span className="text-persian-green-400">Meteor client</span> is
              made by OSRS players for OSRS players. With the latest plugins we
              help you game at your best. Gain access to a full ecosystem
              supported by the community.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {props.features.map((feature: Feature) => {
              return (
                <div key={feature.title}>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);
FeaturesSection.displayName = `FeaturesSection`;

export default FeaturesSection;
