import React from 'react';
import LogicEngine from './components/LogicEngine';
import { Insight } from './logic/types';

const sampleInsight: Insight = {
  title: 'Should I launch LOIFS this week?',
  dimensions: [
    { name: 'Technical Readiness', weight: 0.4, confidence: 0.8 },
    { name: 'User Experience', weight: 0.3, confidence: 0.6 },
    { name: 'Mental Bandwidth', weight: 0.3, confidence: 0.7 },
  ],
};

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>LOIFS Evaluation</h1>
      <LogicEngine insight={sampleInsight} />
    </div>
  );
}

export default App;