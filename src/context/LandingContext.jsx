import { createContext, useContext, useState } from "react";

// 1. Keep this as a local constant, NOT an export
const LandingContext = createContext();

// 2. This is a component, so it stays exported
export function LandingProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("summary");
  const [isJwtAuthorized, setIsJwtAuthorized] = useState(false);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [summaryState, setSummaryState] = useState("full");
  const [deletedNotes, setDeletedNotes] = useState([
    {
      id: 1,
      title: "The Architecture of Sound.md",
      excerpt:
        "A study on acoustics, modular structures, and the natural frequency of modern concrete rooms.",
    },
    {
      id: 2,
      title: "Daily Retrospective — May 25.txt",
      excerpt:
        "Completed frontend layout updates. The typography contrasts are crisp and highly legible.",
    },
  ]);
  const [trashQueue, setTrashQueue] = useState([]);
  const [ticketTier, setTicketTier] = useState("standard");

  const handleAuthorizeJwt = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      setIsJwtAuthorized(true);
    }, 1200);
  };

  const handleSummaryTrigger = () => {
    setSummaryState("summarizing");
    setTimeout(() => {
      setSummaryState("bullet");
    }, 1400);
  };

  const handleDeleteNote = (id) => {
    const noteToDelete = deletedNotes.find((note) => note.id === id);
    if (noteToDelete) {
      setTrashQueue([...trashQueue, noteToDelete]);
      setDeletedNotes(deletedNotes.filter((note) => note.id !== id));
    }
  };

  const handleRecoverNote = () => {
    if (trashQueue.length > 0) {
      const restoredNote = trashQueue[trashQueue.length - 1];
      setDeletedNotes([restoredNote, ...deletedNotes]);
      setTrashQueue(trashQueue.slice(0, -1));
    }
  };

  return (
    <LandingContext.Provider
      value={{
        mobileMenuOpen,
        setMobileMenuOpen,
        activeFeature,
        setActiveFeature,
        isJwtAuthorized,
        setIsJwtAuthorized,
        isAuthorizing,
        handleAuthorizeJwt,
        summaryState,
        setSummaryState,
        handleSummaryTrigger,
        deletedNotes,
        handleDeleteNote,
        trashQueue,
        handleRecoverNote,
        ticketTier,
        setTicketTier,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
}

export const useLanding = () => {
  const context = useContext(LandingContext);
  if (!context) throw new Error("Must be used within LandingProvider");
  return context;
};
