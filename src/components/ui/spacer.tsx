// src/components/ui/Spacer.tsx
import React from 'react';

interface SpacerProps {
  heightClass: string; // Contoh: 'h-screen', 'h-96', 'min-h-[500px]'
}

const Spacer: React.FC<SpacerProps> = ({ heightClass }) => {
  return (
    <div className={`w-full ${heightClass}`}>
    </div>
  );
};

export default Spacer;