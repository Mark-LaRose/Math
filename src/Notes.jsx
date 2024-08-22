import React, { useState, useRef, useEffect } from 'react';

/*
  Notes component
  This component allows users to create, edit, and navigate through notes.
  It supports both text notes and drawings on a canvas.
  The state of notes is persisted using localStorage.
*/

const Notes = () => {
  // State variables for managing notes and drawing mode
  const [pages, setPages] = useState(() => {
    const savedPages = localStorage.getItem('notesPages');
    return savedPages ? JSON.parse(savedPages) : [{ text: '', drawing: null }];
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [drawingMode, setDrawingMode] = useState(false);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  
  // Refs for canvas and textarea elements
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);
  const contextRef = useRef(null);

  // Effect to handle canvas setup and loading drawings
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineWidth = 3;
      contextRef.current = context;

      // Load existing drawing if available
      const drawing = pages[currentPage].drawing;
      if (drawing) {
        const image = new Image();
        image.src = drawing;
        image.onload = () => {
          context.drawImage(image, 0, 0);
        };
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [drawingMode, currentPage, pages]);

  // Effect to save pages state to localStorage
  useEffect(() => {
    localStorage.setItem('notesPages', JSON.stringify(pages));
  }, [pages]);

  // Add a new page
  const handleAddPage = () => {
    if (pages.length < 20) {
      setPages([...pages, { text: '', drawing: null }]);
      setCurrentPage(pages.length);
    }
  };

  // Delete the current page
  const handleDeletePage = () => {
    if (pages.length > 1) {
      const newPages = pages.filter((_, index) => index !== currentPage);
      setPages(newPages);
      setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
    } else {
      // Clear the content of the first page instead of deleting it
      setPages([{ text: '', drawing: null }]);
    }
  };

  // Change the current page
  const handlePageChange = (index) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
    }
  };

  // Handle changes in the textarea
  const handleNoteChange = (e) => {
    const textarea = textareaRef.current;
    if (textarea.scrollHeight > textarea.clientHeight) {
      e.preventDefault();
      return;
    }
    const newPages = [...pages];
    newPages[currentPage] = { ...newPages[currentPage], text: e.target.value };
    setPages(newPages);
  };

  // Toggle drawing mode
  const toggleDrawingMode = () => {
    setDrawingMode(!drawingMode);
  };

  // Handle mouse down event for drawing on canvas
  const handleMouseDown = (e) => {
    if (!drawingMode) return;
    contextRef.current.beginPath();
    contextRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
  };

  // Handle mouse move event for drawing on canvas
  const handleMouseMove = (e) => {
    if (!drawingMode) return;
    contextRef.current.lineTo(
      e.offsetX,
      e.offsetY
    );
    contextRef.current.stroke();
  };

  // Handle mouse up event to finalize drawing
  const handleMouseUp = () => {
    if (!drawingMode) return;
    contextRef.current.closePath();
    canvasRef.current.removeEventListener('mousemove', handleMouseMove);

    // Save drawing to pages state
    const canvas = canvasRef.current;
    const newPages = [...pages];
    newPages[currentPage] = { ...newPages[currentPage], drawing: canvas.toDataURL() };
    setPages(newPages);

    // Add to undo stack
    setUndoStack((prev) => {
      const newStack = [...prev, canvas.toDataURL()];
      if (newStack.length > 10) newStack.shift();
      return newStack;
    });

    // Clear redo stack
    setRedoStack([]);
  };

  // Undo the last drawing action
  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const lastDrawing = undoStack[undoStack.length - 1];
    setUndoStack(undoStack.slice(0, -1));
    setRedoStack([...redoStack, canvasRef.current.toDataURL()]);

    const image = new Image();
    image.src = lastDrawing;
    image.onload = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      contextRef.current.drawImage(image, 0, 0);
    };

    const newPages = [...pages];
    newPages[currentPage] = { ...newPages[currentPage], drawing: lastDrawing };
    setPages(newPages);
  };

  // Redo the last undone action
  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const lastUndone = redoStack[redoStack.length - 1];
    setRedoStack(redoStack.slice(0, -1));
    setUndoStack([...undoStack, canvasRef.current.toDataURL()]);

    const image = new Image();
    image.src = lastUndone;
    image.onload = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      contextRef.current.drawImage(image, 0, 0);
    };

    const newPages = [...pages];
    newPages[currentPage] = { ...newPages[currentPage], drawing: lastUndone };
    setPages(newPages);
  };

  return (
    <div className="notes bg-gray-800 p-6 mt-12 rounded-lg shadow-lg text-white flex flex-col relative">
      <h2 className="text-xl mb-2">Notes</h2>
      <div className="relative w-full h-full bg-gray-700 rounded">
        <textarea
          ref={textareaRef}
          className={`w-full h-full text-white p-2 rounded resize-none ${drawingMode ? 'hidden' : ''}`}
          value={pages[currentPage].text}
          onChange={handleNoteChange}
          style={{ overflow: 'hidden', paddingTop: '60px', paddingBottom: '30px', backgroundColor: '#374151' }}
        />
        <canvas
          ref={canvasRef}
          className={`absolute top-0 left-0 w-full h-full ${drawingMode ? '' : 'hidden'}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </div>
      <div className="absolute top-0 right-0 mt-10 mr-2">
        <div className="add-button ml-2" onClick={handleAddPage}>+</div>
      </div>
      <div className="absolute top-0 left-0 mt-10 ml-2">
        <div className="delete-button ml-2" onClick={handleDeletePage}>×</div>
      </div>
      <div className="absolute top-0 left-0 mt-10 ml-16">
        <div className="undo-button" onClick={handleUndo}>↶</div>
        <div className="redo-button ml-2" onClick={handleRedo}>↷</div>
      </div>
      <div className="absolute top-0 left-0 mt-20 ml-2">
        <div className="toggle-drawing" onClick={toggleDrawingMode}>
          <span className="emoji">
            {drawingMode ? 'A' : '✏️'}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mb-2 ml-2 flex justify-between w-full items-center">
        <div className="arrow left-arrow" onClick={() => handlePageChange(currentPage - 1)}></div>
        <span className="page-numbers">{`${currentPage + 1} / ${pages.length}`}</span>
        <div className="arrow right-arrow" onClick={() => handlePageChange(currentPage + 1)}></div>
      </div>
    </div>
  );
};

export default Notes;