import React, { useState, useMemo } from "react";
import SideBar from "../components/SideBar";
import NoteList from "../components/NoteList";
import EditorPane from "../components/EditorPane";
import FloatingActionMenu from "../components/FloatingActionMenu";
import SettingsModal from "../components/SettingsModal";

const Dashboard = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "The Architecture of Silence",
      content: "Architectural silence is not merely...",
      date: "June 24, 2026",
      isTrash: false,
      isFavorite: false,
      summary: null,
    },
    {
      id: 2,
      title: "Morning Rituals & Flow",
      content: "The first sixty minutes...",
      date: "June 21, 2026",
      isTrash: false,
      isFavorite: false,
      summary: null,
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      content:
        "Artificial intelligence (AI) is the simulation of human cognitive processes by machines, enabling them to learn, reason, and solve problems. By analyzing vast datasets rather than relying on explicit programming, AI drives modern technological advancements from virtual assistants to medical diagnostics.1. Core TechnologiesAI relies on a hierarchy of technologies that allow computers to extract insights and generate original content:Machine Learning (ML): Algorithms are trained on data to make predictions or decisions without being explicitly programmed.Deep Learning: A subset of ML that uses multi-layered artificial neural networks to simulate the human brain's decision-making.Generative AI: Systems capable of creating original text, images, video, and audio from user prompts.2. Main SubfieldsAI is not a single technology; it is an umbrella encompassing several distinct fields:Natural Language Processing (NLP): Enables machines to understand, interpret, and generate human language (e.g., ChatGPT, chatbots).Computer Vision: Allows computers to derive meaningful information from digital images, videos, and the physical environment.Robotics: Integrates AI into physical machines to perceive their surroundings and autonomously perform complex tasks (e.g., autonomous vehicles).Expert Systems: Programs designed to solve complex problems by reasoning through bodies of knowledge, originally used in fields like medical diagnosis.3. Levels of IntelligenceAI development is generally categorized into three conceptual stages:Artificial Narrow Intelligence (ANI): AI systems that excel at specific tasks but lack generalization (e.g., recommendation algorithms).Artificial General Intelligence (AGI): Hypothetical AI that can perform any intellectual task a human can, with the ability to reason, plan, and learn across domains.Artificial Superintelligence (ASI): A theoretical future AI that surpasses human intelligence in all aspects, potentially leading to unprecedented technological growth.4. Ethical ConsiderationsAs AI continues to evolve, it raises important ethical questions about privacy, bias, job displacement, and the potential for misuse. Responsible development and regulation are crucial to ensure that AI benefits society while minimizing risks.",
      date: "May 24, 2026",
      isTrash: false,
      isFavorite: false,
      summary: null,
    },
  ]);
  const [activeNoteId, setActiveNoteId] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("");
  const [isMobileEditorOpen, setIsMobileEditorOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const query = sidebarSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query);

      let matchesTab = true;
      if (activeTab === "favorites") {
        matchesTab = note.isFavorite === true;
      } else if (activeTab === "trash") {
        matchesTab = note.isTrash === true;
      } else {
        matchesTab = !note.isTrash;
      }

      return matchesSearch && matchesTab;
    });
  }, [notes, sidebarSearchQuery, activeTab]);

  const activeNote = notes.find((n) => n.id === activeNoteId);

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Manuscript",
      content: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      isTrash: false,
      isFavorite: false,
      summary: null,
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
    setIsMobileEditorOpen(true);
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, isTrash: true } : n)),
    );
    setActiveNoteId(null);
    setIsMobileEditorOpen(false);
  };

  const handleRecoverNote = (noteId) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, isTrash: false } : n)),
    );
    setActiveNoteId(null);
    setIsMobileEditorOpen(false);
  };

  const handleNoteChange = (updatedContent) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeNoteId ? { ...n, content: updatedContent } : n,
      ),
    );
  };

  const handleTitleChange = (updatedTitle) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeNoteId ? { ...n, title: updatedTitle } : n,
      ),
    );
  };

  const handleSummarizeNote = () => {
    if (!activeNote || !activeNote.content.trim()) return;

    const sentences = activeNote.content.match(/[^.!?]+[.!?]+/g) || [
      activeNote.content,
    ];
    const generatedSummary =
      sentences.length > 2
        ? `${sentences[0]} ${sentences[1]}`.trim()
        : activeNote.content;

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNoteId
          ? { ...note, summary: `✨ CURA SUMMARY: ${generatedSummary}` }
          : note,
      ),
    );
  };

  const handleClearSummary = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNoteId ? { ...note, summary: null } : note,
      ),
    );
  };

  return (
    <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden relative">
      {/* Sidebar - Desktop Only */}
      <div className="hidden md:block">
        <SideBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Note List Panel */}
      <div
        className={`w-full md:w-auto shrink-0 ${isMobileEditorOpen ? "hidden md:block" : "block"}`}
      >
        <NoteList
          notes={filteredNotes}
          activeNoteId={activeNoteId}
          sidebarSearchQuery={sidebarSearchQuery}
          onSidebarSearchChange={setSidebarSearchQuery}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onSelectNote={(id) => {
            // Housekeeping Filter Logic: clean up blank notes upon switching away
            setNotes((prevNotes) => {
              return prevNotes.filter((note) => {
                if (note.id === activeNoteId) {
                  const isTitleEmpty =
                    !note.title ||
                    note.title.trim() === "" ||
                    note.title === "Untitled Manuscript";
                  const isContentEmpty =
                    !note.content || note.content.trim() === "";
                  if (isTitleEmpty && isContentEmpty) {
                    return false;
                  }
                }
                return true;
              });
            });

            setActiveNoteId(id);
            setIsMobileEditorOpen(true);
          }}
        />
      </div>

      {/* Editor Panel*/}
      <div
        className={`flex-1 h-full bg-white ${isMobileEditorOpen ? "block" : "hidden md:block"}`}
      >
        <EditorPane
          activeNote={activeNote}
          activeTab={activeTab}
          onNoteChange={handleNoteChange}
          onTitleChange={handleTitleChange}
          onDeleteNote={handleDeleteNote}
          onRecoverNote={handleRecoverNote}
          onSummarizeNote={handleSummarizeNote}
          onClearSummary={handleClearSummary}
          isMobileEditorOpen={isMobileEditorOpen}
          onCloseMobileEditor={() => setIsMobileEditorOpen(false)}
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
          searchQuery={sidebarSearchQuery}
          setSearchQuery={setSidebarSearchQuery}
        />
      </div>

      {/* Floating Action Menu */}
      <FloatingActionMenu
        onCreateNote={handleCreateNote}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
