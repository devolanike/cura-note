import React, { useState } from "react";
import EditorToolbar from "./EditorToolbar";
import EditorMain from "./EditorMain";
import DeleteModal from "./DeleteModal";

const EditorPane = ({
  activeNote,
  activeTab,
  onNoteChange,
  onTitleChange,
  onSummarizeNote,
  onClearSummary,
  onDeleteNote,
  onRecoverNote,
  isSearchActive,
  setIsSearchActive,
  searchQuery,
  setSearchQuery,
  isMobileEditorOpen,
  onCloseMobileEditor,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleExecuteDelete = () => {
    onDeleteNote(activeNote.id);
    setIsDeleteModalOpen(false);
  };

  return (
    <main className="flex-1 bg-white relative h-full flex flex-col overflow-hidden">
      <EditorToolbar
        activeNote={activeNote}
        activeTab={activeTab}
        onTriggerDeleteModal={() => setIsDeleteModalOpen(true)}
        onRecoverNote={onRecoverNote}
      />

      <div className="flex-1 overflow-y-auto">
        <EditorMain
          activeNote={activeNote}
          onNoteChange={onNoteChange}
          onTitleChange={onTitleChange}
          onSummarizeNote={onSummarizeNote}
          onClearSummary={onClearSummary}
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isMobileEditorOpen={isMobileEditorOpen}
          onCloseMobileEditor={onCloseMobileEditor}
        />
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        noteTitle={activeNote?.title}
        onConfirm={handleExecuteDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </main>
  );
};

export default EditorPane;
