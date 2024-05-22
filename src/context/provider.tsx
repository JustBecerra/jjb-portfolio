'use client';
import { ReactElement, RefObject, createContext, useContext, useRef } from 'react';

interface Props {
  informationRef: RefObject<HTMLDivElement>;
  technologiesRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const PortfolioContext = createContext<Props>({} as Props);

type ProviderProps = {
  children: ReactElement;
};

export const PortfolioProvider: React.FC<ProviderProps> = ({ children }) => {
  const informationRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <PortfolioContext.Provider
      value={{
        informationRef,
        technologiesRef,
        projectsRef,
        contactRef,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = (): Props => {
  const { informationRef, technologiesRef, projectsRef, contactRef } = useContext(PortfolioContext);
  return {
    informationRef,
    technologiesRef,
    projectsRef,
    contactRef,
  };
};

export default PortfolioContext;
