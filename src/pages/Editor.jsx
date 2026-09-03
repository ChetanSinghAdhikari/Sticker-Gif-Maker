import { useState } from "react";
import TopBar from "../components/Editor/TopBar.jsx";
import LeftToolbar from "../components/Editor/LeftToolbar.jsx";
import Canvas from "../components/Editor/Canvas";
import RightPanel from "../components/Editor/RightPanel";
import Timeline from "../components/Editor/Timeline";
import "../App.css";

function Editor() {
  const [selectedTool, setSelectedTool] = useState("select");
  const [selectedObject, setSelectedObject] = useState(null);

  return (
    <div className="editor-app">
      <TopBar />

      <div className="editor-main">
        <LeftToolbar
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />

        <main className="workspace">
          <Canvas
            selectedTool={selectedTool}
            selectedObject={selectedObject}
            setSelectedObject={setSelectedObject}
          />

          <Timeline />
        </main>

        <RightPanel
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
        />
      </div>
    </div>
  );
}

export default Editor;