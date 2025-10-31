
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center my-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
        365-Day Tech & Security Challenge
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
        Your daily guide to mastering code, security, and systems. Track your progress and build powerful habits, one day at a time.
      </p>
    </header>
  );
};

export default Header;
