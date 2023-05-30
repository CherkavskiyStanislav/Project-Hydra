import React from "react";
import './Main.scss';
import { useTranslation } from 'react-i18next';
import PostItem from "./components/PostItem";
import About from "./about/About";
import Build from "./build/Build";
import Technologies from "./technologies/Technologies";
import Process from "./process/Process";


const Main = () => {
  const { t } = useTranslation();

  const posts = [
    { 
      cName:'main__introduction',
      divName: 'main__introduction--subtitle',
      title: t('about__introduction-h2'), 
      secondTitle: t('about__introduction-h3'),
      body: t('about__introduction-p'),
    },
    { 
      cName:'main__why',
      divName: 'main__why--subtitle',
      title: t('build__why-h2'),
      secondTitle: t('build__why-h3'),
      body: t('build__why-p'),
    },
    { 
      cName:'main__how', 
      divName: 'main__how--subtitle',
      title: t('process-h2'),
      secondTitle: t('process-h3'),
      body: t('process-p')
    },
  ];

  return (
    <div className="main">
          <PostItem post={posts[0]} />
          <About />
          <PostItem post={posts[1]} />
          <Build />
          <PostItem post={posts[2]} />
          <Technologies />
          <Process  />

    </div>
  );
}

export default Main;