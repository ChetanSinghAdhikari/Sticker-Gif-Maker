import {
  Play,
  Plus,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

function Timeline() {
  return (
    <section className="timeline">

      {/* Timeline Header */}
      <div className="timeline-header">

        <div className="timeline-title">
          <span>Timeline</span>

          <button className="add-track">
            <Plus size={14} />
            Add Track
          </button>
        </div>

        <div className="timeline-controls">

          <button>
            <Play size={15} />
          </button>

          <span>00:00 / 00:05</span>

          <button>
            <ZoomOut size={14} />
          </button>

          <button>
            <ZoomIn size={14} />
          </button>

        </div>

      </div>

      {/* Timeline Body */}
      <div className="timeline-body">

        {/* Time ruler */}
        <div className="time-ruler">

          <span>0s</span>
          <span>1s</span>
          <span>2s</span>
          <span>3s</span>
          <span>4s</span>
          <span>5s</span>

        </div>

        {/* Tracks */}
        <div className="track-row">

          <div className="track-name">
            Sticker
          </div>

          <div className="track-content">

            <div className="timeline-clip">
              <span>Sticker</span>
            </div>

          </div>

        </div>

        <div className="track-row">

          <div className="track-name">
            Text
          </div>

          <div className="track-content">

            <div className="timeline-clip text-clip">
              <span>Text</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;