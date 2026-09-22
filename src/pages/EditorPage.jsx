import { useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Download, RotateCcw, ChevronDown, ChevronRight, 
  ArrowUp, ArrowDown, Image as ImageIcon, Layout, Type, 
  Settings, Trash2
} from 'lucide-react';
import App from '../App';
import './Editor.css';

const EDITABLE_FIELDS = {
  title: { label: 'Title', type: 'input', category: 'content' },
  subtitle: { label: 'Subtitle', type: 'input', category: 'content' },
  badge: { label: 'Badge Text', type: 'input', category: 'content' },
  eyebrow: { label: 'Eyebrow Label', type: 'input', category: 'content' },
  description: { label: 'Description', type: 'textarea', category: 'content' },
  content: { label: 'Content', type: 'textarea', category: 'content' },
  price: { label: 'Price', type: 'input', category: 'content' },
  quoteUrl: { label: 'Quote URL', type: 'input', category: 'content' },
  thankYou: { label: 'Body Text', type: 'textarea', category: 'content' },
  buttonText: { label: 'Button Text', type: 'input', category: 'content' },
  visualTitle: { label: 'Visual Title', type: 'input', category: 'content' },
  visualText: { label: 'Visual Text', type: 'input', category: 'content' },
  metrics: { label: 'Metrics (JSON)', type: 'json', category: 'content' },
  imageUrl: { label: 'Image URL', type: 'image', category: 'design' },
  image1: { label: 'Image 1 URL', type: 'image', category: 'design' },
  image2: { label: 'Image 2 URL', type: 'image', category: 'design' },
  linkUrl: { label: 'External Link URL', type: 'input', category: 'design' },
  imagePosition: { label: 'Image Position', type: 'select', category: 'design', options: ['left', 'right'] },
  paddingTop: { label: 'Padding Top', type: 'number', category: 'design' },
  paddingBottom: { label: 'Padding Bottom', type: 'number', category: 'design' },
  paddingLeft: { label: 'Padding Left', type: 'number', category: 'design' },
  paddingRight: { label: 'Padding Right', type: 'number', category: 'design' },
  lineHeight: { label: 'Line Height', type: 'number', category: 'design' },
  splitRatio: { label: 'Text Width %', type: 'number', category: 'design' },
};

function SectionEditor({ section, index, totalSections }) {
  const { updateField, moveSection } = useEditor();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const sectionKeys = Object.keys(section.data);
  const standardDesignKeys = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'lineHeight', 'splitRatio', 'imageUrl', 'imagePosition'];
  const allPossibleKeys = [...new Set([...sectionKeys, ...standardDesignKeys])];
  const editableKeys = allPossibleKeys.filter(k => EDITABLE_FIELDS[k]);

  const contentKeys = editableKeys.filter(k => EDITABLE_FIELDS[k].category === 'content');
  const designKeys = editableKeys.filter(k => EDITABLE_FIELDS[k].category === 'design');

  if (editableKeys.length === 0) return null;

  return (
    <div className={`editor-section ${open ? 'is-open' : ''}`}>
      <div className="editor-section-header">
        <button className="editor-section-toggle" onClick={() => setOpen(o => !o)}>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <span className="editor-section-label">
            {section.data.eyebrow || section.data.title || section.type}
          </span>
          <span className="editor-section-type">{section.type}</span>
        </button>
        
        <div className="editor-section-actions">
          <button 
            className="editor-icon-btn" 
            disabled={index === 0}
            onClick={() => moveSection(index, -1)}
            title="Move Up"
          >
            <ArrowUp size={14} />
          </button>
          <button 
            className="editor-icon-btn" 
            disabled={index === totalSections - 1}
            onClick={() => moveSection(index, 1)}
            title="Move Down"
          >
            <ArrowDown size={14} />
          </button>
        </div>
      </div>

      {open && (
        <div className="editor-section-body">
          <div className="editor-tabs">
            <button 
              className={`editor-tab ${activeTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <Type size={14} /> Content
            </button>
            <button 
              className={`editor-tab ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              <Layout size={14} /> Design
            </button>
          </div>

          <div className="editor-tab-content">
            {(activeTab === 'content' ? contentKeys : designKeys).map(key => {
              const field = EDITABLE_FIELDS[key];
              const value = section.data[key] || '';

              return (
                <div className={`editor-field field-type-${field.type}`} key={key}>
                  <label className="editor-label">{field.label}</label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      className="editor-textarea"
                      value={value}
                      rows={4}
                      onChange={e => updateField(['sections', index, 'data', key], e.target.value)}
                    />
                  ) : field.type === 'select' ? (
                    <select 
                      className="editor-select"
                      value={value}
                      onChange={e => updateField(['sections', index, 'data', key], e.target.value)}
                    >
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : field.type === 'image' ? (
                    <div className="editor-image-field">
                      <input
                        className="editor-input"
                        type="text"
                        value={value}
                        placeholder="Image URL..."
                        onChange={e => updateField(['sections', index, 'data', key], e.target.value)}
                      />
                      {value && (
                        <div className="editor-image-preview">
                          <img src={value} alt="Preview" />
                        </div>
                      )}
                    </div>
                  ) : field.type === 'json' ? (
                    <textarea
                      className="editor-textarea editor-code-input"
                      value={typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                      rows={6}
                      onChange={e => {
                        try {
                          const parsed = JSON.parse(e.target.value);
                          updateField(['sections', index, 'data', key], parsed);
                        } catch (err) {
                          // Allow typing invalid JSON temporarily
                          updateField(['sections', index, 'data', key], e.target.value);
                        }
                      }}
                    />
                  ) : (
                    <input
                      className="editor-input"
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={value}
                      onChange={e => updateField(['sections', index, 'data', key], field.type === 'number' ? parseFloat(e.target.value) : e.target.value)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function generateExport(data) {
  const sectionsStr = data.sections.map(s => {
    const dataStr = Object.entries(s.data)
      .map(([k, v]) => {
        if (typeof v === 'string') return `        ${k}: ${JSON.stringify(v)}`;
        if (Array.isArray(v)) return `        ${k}: ${JSON.stringify(v, null, 8)}`;
        return `        ${k}: ${JSON.stringify(v)}`;
      })
      .join(',\n');
    return `    {\n      type: '${s.type}',\n      id: '${s.id}',\n      data: {\n${dataStr}\n      }\n    }`;
  }).join(',\n');

  return `// proposalData.js — exported from editor
export const proposalData = {
  client: ${JSON.stringify(data.client, null, 4)},
  agency: ${JSON.stringify(data.agency, null, 4)},
  hero: ${JSON.stringify(data.hero, null, 4)},
  sections: [\n${sectionsStr}\n  ],\n  quote: ${JSON.stringify(data.quote, null, 4)}\n};\n`;
}

export default function EditorPage() {
  const { data, updateField, resetAll } = useEditor();
  const [copied, setCopied] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const exportCode = generateExport(data);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="editor-page">
      {/* Sidebar */}
      <aside className="editor-sidebar">
        <div className="editor-sidebar-header">
          <Link to="/" className="editor-back-btn">
            <ArrowLeft size={16} /> View Proposal
          </Link>
          <h1 className="editor-title">Content Editor</h1>
          <p className="editor-subtitle">Easily manage your proposal content and layout.</p>
        </div>

        <div className="editor-scroll-area">
          <div className="editor-global">
            <h2 className="editor-group-title"><Settings size={12} /> General Branding</h2>
            <div className="editor-field">
              <label className="editor-label">Client Name</label>
              <input className="editor-input" type="text" value={data.client.name || ''}
                onChange={e => updateField(['client', 'name'], e.target.value)} />
            </div>
            <div className="editor-field">
              <label className="editor-label">Hero Badge</label>
              <input className="editor-input" type="text" value={data.hero.badge || ''}
                onChange={e => updateField(['hero', 'badge'], e.target.value)} />
            </div>
            <div className="editor-field">
              <label className="editor-label">Hero Title</label>
              <input className="editor-input" type="text" value={data.hero.title || ''}
                onChange={e => updateField(['hero', 'title'], e.target.value)} />
            </div>
            <div className="editor-field">
              <label className="editor-label">Hero Subtitle</label>
              <textarea className="editor-textarea" rows={2} value={data.hero.subtitle || ''}
                onChange={e => updateField(['hero', 'subtitle'], e.target.value)} />
            </div>
          </div>

          <div className="editor-sections-list">
            <h2 className="editor-group-title"><Layout size={12} /> Proposal Sections</h2>
            {data.sections.map((section, i) => (
              <SectionEditor 
                key={section.id || i} 
                section={section} 
                index={i} 
                totalSections={data.sections.length} 
              />
            ))}
          </div>
        </div>

        <div className="editor-actions">
          <button className="editor-btn-reset" onClick={() => { if (confirm('Reset ALL edits to original?')) resetAll(); }}>
            <RotateCcw size={14} /> Reset
          </button>
          <button className="editor-btn-export" onClick={() => setShowExport(true)}>
            <Download size={14} /> Export Data
          </button>
        </div>
      </aside>

      {/* Live Preview */}
      <main className="editor-preview">
        <div className="editor-preview-bar">
          <span className="editor-preview-label">Live Preview</span>
          <span className="editor-preview-hint">Changes apply instantly</span>
        </div>
        <div className="editor-preview-content">
          <App hideEditButton={true} />
        </div>
      </main>

      {/* Export Modal */}
      {showExport && (
        <div className="editor-modal-overlay" onClick={() => setShowExport(false)}>
          <div className="editor-modal" onClick={e => e.stopPropagation()}>
            <h2 className="editor-modal-title">Export proposalData.js</h2>
            <p className="editor-modal-hint">Copy this code and paste it into <code>src/data/proposalData.js</code> to save your changes permanently.</p>
            <pre className="editor-modal-code">{exportCode}</pre>
            <div className="editor-modal-actions">
              <button className="editor-btn-export" onClick={handleCopy}>
                {copied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
              <button className="editor-btn-reset" onClick={() => setShowExport(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
