import {
  MousePointer2,
  Image,
  Type,
  Shapes,
  Smile,
  Sparkles,
  Scissors,
  Layers,
  Upload,
} from "lucide-react";

import ToolButton from "../UI/ToolButton";

function LeftToolbar({
  selectedTool,
  setSelectedTool,
}) {
  const tools = [
    {
      id: "select",
      label: "Select",
      icon: MousePointer2,
    },
    {
      id: "image",
      label: "Image",
      icon: Image,
    },
    {
      id: "text",
      label: "Text",
      icon: Type,
    },
    {
      id: "shapes",
      label: "Shapes",
      icon: Shapes,
    },
    {
      id: "stickers",
      label: "Stickers",
      icon: Smile,
    },
    {
      id: "effects",
      label: "Effects",
      icon: Sparkles,
    },
    {
      id: "remove-bg",
      label: "Remove BG",
      icon: Scissors,
    },
  ];

  return (
    <aside className="left-toolbar">

      <div className="toolbar-section">

        {tools.map((tool) => (
          <ToolButton
            key={tool.id}
            icon={tool.icon}
            label={tool.label}
            active={selectedTool === tool.id}
            onClick={() => setSelectedTool(tool.id)}
          />
        ))}

      </div>

      <div className="toolbar-bottom">

        <ToolButton
          icon={Upload}
          label="Upload"
          onClick={() => setSelectedTool("upload")}
        />

        <ToolButton
          icon={Layers}
          label="Layers"
          onClick={() => setSelectedTool("layers")}
        />

      </div>

    </aside>
  );
}

export default LeftToolbar;