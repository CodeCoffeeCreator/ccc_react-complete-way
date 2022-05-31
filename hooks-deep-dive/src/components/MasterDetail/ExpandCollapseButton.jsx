import './MasterDetail.css';

const ExpandCollapseButton = ({ expanded, onToggle }) => {
  const expandButtonClass = `expand-collapse-button ${
    expanded ? 'selected' : ''
  }`;

  return (
    <button className={expandButtonClass} onClick={onToggle}>
      {expanded ? '-' : '+'}
    </button>
  );
};

export default ExpandCollapseButton;
