function ToolButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}) {
  return (
    <button
      className={`tool-button ${active ? "active" : ""}`}
      onClick={onClick}
      title={label}
    >
      <Icon size={20} strokeWidth={1.8} />

      <span>{label}</span>
    </button>
  );
}

export default ToolButton;