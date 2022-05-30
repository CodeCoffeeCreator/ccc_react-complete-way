import React from 'react';
import { MasterDetail } from './components/MasterDetail';
import { HooksBasicsSection } from './HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from './SideEffects/SideEffectsSection';
import ImperativeCodeSection from './ImperativeCode/ImperativeCodeSection';

export default function App() {
  return (
    <MasterDetail>
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
    </MasterDetail>
  );
}
