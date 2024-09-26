'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookCallModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookCallModalContext = createContext<BookCallModalContextType | undefined>(undefined);

export function BookCallModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookCallModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookCallModalContext.Provider>
  );
}

export function useBookCallModal() {
  const context = useContext(BookCallModalContext);
  if (context === undefined) {
    throw new Error('useBookCallModal must be used within a BookCallModalProvider');
  }
  return context;
}
