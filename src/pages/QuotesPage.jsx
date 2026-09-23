import React, { useMemo, useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import ProposalBanner from '../components/dealer/ProposalBanner';
import './QuotesPage.css';
import './QuotesDealer.css';

const APPROVAL_RECIPIENT = "francois.bigondigital@gmail.com";

// "R19,500" -> 19500
const parseRand = (value) => parseInt(String(value).replace(/[^\d]/g, ''), 10) || 0;

// 19500 -> "R19,500", matching the proposal copy
const formatRand = (value) => `R${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const QuotesPage = () => {
  const { data: proposalData } = useEditor();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copied, setCopied] = useState(false);

  const setup = proposalData.sections.find(s => s.type === 'SetupSummary')?.data;
  const packagesData = proposalData.sections.find(s => s.type === 'Packages')?.data;
  const packages = useMemo(() => packagesData?.packages || [], [packagesData]);
  const optional = useMemo(() => proposalData.quote?.optional || [], [proposalData]);

  const setupRows = useMemo(() => setup?.rows || [], [setup]);

  const [packageId, setPackageId] = useState(() => (packages.find(p => p.featured) || packages[0])?.id);
  const [selectedOptional, setSelectedOptional] = useState(new Set());
  const [selectedSetup, setSelectedSetup] = useState(() => new Set(setupRows.map(row => row.service)));

  const toggleOptional = (id) => {
    const next = new Set(selectedOptional);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedOptional(next);
  };

  const toggleSetup = (service) => {
    const next = new Set(selectedSetup);
    if (next.has(service)) next.delete(service);
    else next.add(service);
    setSelectedSetup(next);
  };

  const chosenSetup = setupRows.filter(row => selectedSetup.has(row.service));
  const setupTotal = chosenSetup.reduce((sum, row) => sum + parseRand(row.price), 0);
  const setupDeposit = Math.round(setupTotal / 2);
  const setupBalance = setupTotal - setupDeposit;

  const selectedPackage = packages.find(p => p.id === packageId);
  const chosenOptional = optional.filter(item => selectedOptional.has(item.id));
  const optionalOnceOff = chosenOptional.filter(item => !item.monthly);
  const optionalMonthly = chosenOptional.filter(item => item.monthly);

  const monthlyTotal = (selectedPackage ? parseRand(selectedPackage.price) : 0)
    + optionalMonthly.reduce((sum, item) => sum + (item.amount || 0), 0);

  const mediaBudgets = [
    selectedPackage?.mediaBudget,
    ...chosenOptional.map(item => item.mediaBudget)
  ].filter(Boolean);

  const getApprovalText = () => {
    const lines = [`${proposalData.client?.name}: Social Media Proposal approved.`, ''];
    if (setup && chosenSetup.length) {
      lines.push(setup.title);
      chosenSetup.forEach(row => lines.push(`- ${row.service}: ${row.price}`));
      lines.push(`${setup.total.label}: ${formatRand(setupTotal)}`);
      lines.push(`${setup.deposit.label}: ${formatRand(setupDeposit)}`, '');
    }
    if (selectedPackage) {
      lines.push(`${selectedPackage.label}: ${selectedPackage.name} (${selectedPackage.price} per month)`, '');
    }
    if (chosenOptional.length) {
      lines.push('Optional Growth Services');
      chosenOptional.forEach(item => lines.push(`- ${item.label}: ${item.display}`));
      lines.push('');
    }
    mediaBudgets.forEach(note => lines.push(note));
    return lines.join('\n');
  };

  const handleApprove = () => {
    const subject = `Proposal Approved: ${proposalData.client?.name}`;
    const approvalText = getApprovalText();

    try {
      navigator.clipboard.writeText(approvalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    window.location.assign(`mailto:${APPROVAL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`);
    setIsApproved(true);
    setShowConfirm(false);
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(getApprovalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmail = () => {
    const subject = `Proposal Approved: ${proposalData.client?.name}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${APPROVAL_RECIPIENT}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(getApprovalText())}`;
    window.open(gmailUrl, '_blank');
  };

  const optionalGroups = optional.reduce((groups, item) => {
    (groups[item.group] = groups[item.group] || []).push(item);
    return groups;
  }, {});

  return (
    <div className="quotes-page">
      <ProposalBanner banner={proposalData.hero?.banner} />
      <div className="quotes-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Proposal
          </Link>
          <div className="header-content">
            <h1 className="quotes-title">Investment Summary</h1>
            <p className="quotes-subtitle">{proposalData.client?.name}</p>
          </div>
        </div>
      </div>

      <div className="container quotes-container">
        <div className="quotes-grid">
          <div className="quote-steps">
            {setup && (
              <section className="quote-step">
                <h2 className="quote-step-title">Once-Off Marketing Foundation</h2>
                <div className="quote-options">
                  {setupRows.map(row => (
                    <label key={row.service} className={`quote-option checkbox${selectedSetup.has(row.service) ? ' selected' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedSetup.has(row.service)}
                        onChange={() => toggleSetup(row.service)}
                      />
                      <span className="quote-option-mark" />
                      <span className="quote-option-text">
                        <span className="quote-option-name small">{row.service}</span>
                      </span>
                      <span className="quote-option-price small">{row.price}</span>
                    </label>
                  ))}
                </div>
                <div className="spec-sheet setup-totals">
                  <div className="spec-sheet-row total">
                    <span>{setup.total.label}</span>
                    <span className="spec-sheet-amount">{formatRand(setupTotal)}</span>
                  </div>
                  <div className="spec-sheet-row">
                    <span>{setup.deposit.label}</span>
                    <span className="spec-sheet-amount">{formatRand(setupDeposit)}</span>
                  </div>
                  <div className="spec-sheet-row">
                    <span>{setup.balance.label}</span>
                    <span className="spec-sheet-amount">{formatRand(setupBalance)}</span>
                  </div>
                </div>
                <p className="dealer-note quote-step-note">{setup.note}</p>
              </section>
            )}

            {packagesData && (
              <section className="quote-step">
                <h2 className="quote-step-title">{packagesData.title}</h2>
                <div className="quote-options" role="radiogroup">
                  {packages.map(pkg => (
                    <label key={pkg.id} className={`quote-option${packageId === pkg.id ? ' selected' : ''}`}>
                      <input
                        type="radio"
                        name="package"
                        checked={packageId === pkg.id}
                        onChange={() => setPackageId(pkg.id)}
                      />
                      <span className="quote-option-mark" />
                      <span className="quote-option-text">
                        <span className="quote-option-label">{pkg.label}</span>
                        <span className="quote-option-name">{pkg.name}</span>
                        <span className="quote-option-detail">{pkg.items.map(item => item.service).join(' · ')}</span>
                      </span>
                      <span className="quote-option-price">{pkg.price}<small>per month</small></span>
                    </label>
                  ))}
                </div>
              </section>
            )}

            {optional.length > 0 && (
              <section className="quote-step">
                <h2 className="quote-step-title">Optional Growth Services</h2>
                {Object.entries(optionalGroups).map(([group, items]) => (
                  <div key={group} className="quote-option-group">
                    <p className="quote-option-group-title">{group}</p>
                    <div className="quote-options">
                      {items.map(item => (
                        <label key={item.id} className={`quote-option checkbox${selectedOptional.has(item.id) ? ' selected' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedOptional.has(item.id)}
                            onChange={() => toggleOptional(item.id)}
                          />
                          <span className="quote-option-mark" />
                          <span className="quote-option-text">
                            <span className="quote-option-name small">{item.label}</span>
                          </span>
                          <span className="quote-option-price small">{item.display}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}
          </div>

          <div className="summary-column">
            <div className="summary-card glass-panel dark">
              <h3 className="summary-title">Investment Summary</h3>

              {setup && chosenSetup.length > 0 && (
                <div className="summary-group">
                  <p className="summary-group-title">Once-Off Marketing Foundation</p>
                  <div className="summary-row"><span>{setup.total.label}</span><span className="amount">{formatRand(setupTotal)}</span></div>
                  <div className="summary-row"><span>{setup.deposit.label}</span><span className="amount">{formatRand(setupDeposit)}</span></div>
                  <div className="summary-row"><span>{setup.balance.label}</span><span className="amount">{formatRand(setupBalance)}</span></div>
                  {optionalOnceOff.map(item => (
                    <div key={item.id} className="summary-row"><span>{item.label}</span><span className="amount">{item.display}</span></div>
                  ))}
                </div>
              )}

              <div className="summary-divider"></div>

              <div className="summary-group">
                <p className="summary-group-title">Monthly Marketing Services</p>
                {selectedPackage && (
                  <div className="summary-row">
                    <span>{selectedPackage.label}: {selectedPackage.name}</span>
                    <span className="amount">{selectedPackage.price}</span>
                  </div>
                )}
                {optionalMonthly.map(item => (
                  <div key={item.id} className="summary-row"><span>{item.label}</span><span className="amount">{formatRand(item.amount)}</span></div>
                ))}
                <div className="summary-row total">
                  <span>Per month</span>
                  <span className="amount">{formatRand(monthlyTotal)}</span>
                </div>
                {mediaBudgets.map(note => <p key={note} className="summary-media">{note}</p>)}
              </div>

              <div className="summary-divider"></div>

              {isApproved ? (
                <div className="approval-success-container glass-panel">
                  <div className="success-header">
                    <CheckCircle2 size={32} className="success-icon" />
                    <h4>Project Approved!</h4>
                  </div>
                  <p className="success-msg">Approval details copied to clipboard. If your email didn't open, use the buttons below:</p>
                  <div className="success-actions">
                    <button className="btn-success-action" onClick={openGmail}>
                      Open in Gmail
                    </button>
                    <button className="btn-success-action outline" onClick={handleManualCopy}>
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                  <button className="btn-success-reset" onClick={() => setIsApproved(false)}>
                    <ChevronLeft size={16} /> Back
                  </button>
                </div>
              ) : !showConfirm ? (
                <button className="btn-approve-all" onClick={() => setShowConfirm(true)}>
                  <CheckCircle2 size={20} className="mr-2" /> Approve Selection
                </button>
              ) : (
                <div className="approval-confirm-container">
                  <p className="confirm-text">Confirm project approval?</p>
                  <div className="confirm-buttons">
                    <button className="btn-confirm-yes" onClick={handleApprove}>
                      Yes, Approve
                    </button>
                    <button className="btn-confirm-no" onClick={() => setShowConfirm(false)}>
                      No
                    </button>
                  </div>
                </div>
              )}

              <Link to="/" className="btn-view-all">
                <FileText size={20} className="mr-2" /> Return to Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuotesPage;
