import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MasterDetails } from './MasterDetail/MasterDetails';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';

const content = {
  ch1: { name: 'Chapter 1', component: Chapter1 },
  ch2: { name: 'Chapter 2', component: Chapter2 },
  ch3: { name: 'Chapter 3', component: Chapter3 },
  ch4: { name: 'Chapter 4', component: Chapter4 },
  ch5: { name: 'Chapter 5', component: Chapter5 },
  ch6: { name: 'Chapter 6', component: Chapter6 },
  ch7: { name: 'Chapter 7', component: Chapter7 },
  ch8: { name: 'Chapter 8', component: Chapter8 },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MasterDetails content={content} />);
