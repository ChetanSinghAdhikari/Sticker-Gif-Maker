import {
  Plus,
  Minus,
  Maximize,
  MoreHorizontal,
} from "lucide-react";

function Canvas({
  selectedTool,
  selectedObject,
  setSelectedObject,
}) {
  return (
    <section className="canvas-area">

      {/* Canvas toolbar */}
      <div className="canvas-toolbar">

        <div className="canvas-info">
          <span>Canvas</span>
          <span className="canvas-size">
            512 × 512
          </span>
        </div>

        <div className="canvas-controls">

          <button>
            <Minus size={16} />
          </button>

          <span>100%</span>

          <button>
            <Plus size={16} />
          </button>

          <button>
            <Maximize size={16} />
          </button>

          <button>
            <MoreHorizontal size={17} />
          </button>

        </div>

      </div>

      {/* Workspace */}
      <div className="canvas-workspace">

        <div
          className="sticker-canvas"
          onClick={() => setSelectedObject(null)}
        >

          {/* Empty canvas */}
          <div className="canvas-placeholder">

            <div className="placeholder-icon">
              ✦
            </div>

            <h2>Your sticker starts here</h2>

            <p>
              Upload an image or add text to begin
            </p>

            <button className="canvas-upload">
              Upload Image
            </button>

          </div>

        </div>

      </div>

      {/* Status bar */}
      <div className="canvas-status">

        <span>
          {selectedTool === "select"
            ? "Select an object"
            : `Tool: ${selectedTool}`}
        </span>

        <span>
          512 × 512
        </span>

      </div>

    </section>
  );
}

export default Canvas;