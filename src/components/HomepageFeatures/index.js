import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/startup-rocket-launch-icon.svg').default,
    description: (
      <>
        CryoStat was built to be a drop in replacement for those who use grafana but don't necessarily need all the extra weight that comes with it.
      </>
    ),
  },
  {
    title: 'Analytics and Status pages',
    Svg: require('@site/static/img/candlestick-icon.svg').default,
    description: (
      <>
        Instead of having status pages build based on pings to your service. Have status pages built on thresholds based on real-time data. Updating you and your users when it matters. 
      </>
    ),
  },
  {
    title: 'Community Support',
    Svg: require('@site/static/img/diversity-icon.svg').default,
    description: (
      <>
        We strive to make everyone feel welcome. From beginner all the way to Expert. No one should feel left out. We'll support you no matter what.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
