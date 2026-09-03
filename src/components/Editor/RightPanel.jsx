import {
  ChevronDown,
  Eye,
  Lock,
  Trash2,
} from "lucide-react";

function RightPanel({
  selectedObject,
  setSelectedObject,
}) {
  return (
    <aside className="right-panel">

      {/* Properties Header */}
      <div className="panel-header">

        <div>
          <h2>Properties</h2>
          <span>Customize your object</span>
        </div>

      </div>

      {!selectedObject ? (
        <EmptyProperties />
      ) : (
        <ObjectProperties
          selectedObject={selectedObject}
        />
      )}

      {/* Layers */}
      <div className="layers-section">

        <div className="section-title">
          <span>Layers</span>

          <button>
            <ChevronDown size={15} />
          </button>
        </div>

        <div className="layer-item selected">

          <div className="layer-thumbnail">
            ✦
          </div>

          <div className="layer-name">
            Sticker
          </div>

          <Eye size={16} />

        </div>

        <div className="layer-item">

          <div className="layer-thumbnail image-thumb">
            IMG
          </div>

          <div className="layer-name">
            Background
          </div>

          <Lock size={15} />

        </div>

      </div>

    </aside>
  );
}

function EmptyProperties() {
  return (
    <div className="empty-properties">

      <div className="empty-properties-icon">
        ◇
      </div>

      <h3>No object selected</h3>

      <p>
        Select an object on the canvas to edit its properties.
      </p>

    </div>
  );
}

function ObjectProperties({ selectedObject }) {
  return (
    <div className="object-properties">

      <div className="property-section">

        <label>Position</label>

        <div className="property-row">

          <div className="input-group">
            <span>X</span>
            <input value="0" readOnly />
          </div>

          <div className="input-group">
            <span>Y</span>
            <input value="0" readOnly />
          </div>

        </div>

      </div>

      <div className="property-section">

        <label>Size</label>

        <div className="property-row">

          <div className="input-group">
            <span>W</span>
            <input value="512" readOnly />
          </div>

          <div className="input-group">
            <span>H</span>
            <input value="512" readOnly />
          </div>

        </div>

      </div>

      <div className="property-section">

        <label>Opacity</label>

        <div className="range-container">

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
          />

          <span>100%</span>

        </div>

      </div>

      <button className="delete-button">
        <Trash2 size={16} />
        Delete Object
      </button>

    </div>
  );
}

export default RightPanel;