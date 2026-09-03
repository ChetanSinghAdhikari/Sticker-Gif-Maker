import {
  Undo2,
  Redo2,
  Play,
  Download,
  Settings,
  ChevronDown,
} from "lucide-react";

function TopBar() {
  return (
    <header className="topbar">

      {/* Logo */}
      <div className="brand">
        <div className="brand-icon">✦</div>

        <div>
          <h1>Sticker Studio</h1>
          <span>Untitled Project</span>
        </div>
      </div>

      {/* Center Controls */}
      <div className="topbar-center">

        <button className="icon-button">
          <Undo2 size={19} />
        </button>

        <button className="icon-button disabled">
          <Redo2 size={19} />
        </button>

        <div className="divider" />

        <button className="zoom-button">
          100%
          <ChevronDown size={14} />
        </button>

      </div>

      {/* Right Controls */}
      <div className="topbar-actions">

        <button className="preview-button">
          <Play size={17} />
          Preview
        </button>

        <button className="export-button">
          <Download size={17} />
          Export
        </button>

        <button className="icon-button">
          <Settings size={19} />
        </button>

      </div>

    </header>
  );
}

export default TopBar;