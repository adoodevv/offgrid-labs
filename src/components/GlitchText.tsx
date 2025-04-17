import React, { ReactNode } from 'react';

const GlitchText: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
   return (
      <span className="glitch" data-text={children}>
         {children}
      </span>
   );
};

export default GlitchText;
