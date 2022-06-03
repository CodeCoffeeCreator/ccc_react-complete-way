import React from 'react';
import { MasterDetail } from './components/MasterDetail';
import { HooksBasicsSection } from './HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from './SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from './ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from './Memoization/MemoizationSection';
import { AdvancedHooksSection } from './AdvancedHooks/AdvancedHooksSection';

const App = () => {
  return (
    <MasterDetail>
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
      <AdvancedHooksSection />
    </MasterDetail>
  );
};

export default App;
