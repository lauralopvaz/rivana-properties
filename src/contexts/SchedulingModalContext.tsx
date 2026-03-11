import { createContext, useContext, useState, ReactNode } from 'react';

export type ContactType = 'videollamada' | 'llamada' | 'recorrido' | 'asesoria';

interface SchedulingModalContextType {
  isOpen: boolean;
  selectedType: ContactType;
  openModal: (type?: ContactType) => void;
  closeModal: () => void;
  setSelectedType: (type: ContactType) => void;
}

const SchedulingModalContext = createContext<SchedulingModalContextType>({
  isOpen: false,
  selectedType: 'videollamada',
  openModal: () => {},
  closeModal: () => {},
  setSelectedType: () => {},
});

export const useSchedulingModal = () => useContext(SchedulingModalContext);

export const SchedulingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ContactType>('videollamada');

  const openModal = (type: ContactType = 'videollamada') => {
    setSelectedType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <SchedulingModalContext.Provider value={{ isOpen, selectedType, openModal, closeModal, setSelectedType }}>
      {children}
    </SchedulingModalContext.Provider>
  );
};
