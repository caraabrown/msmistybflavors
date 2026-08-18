/* @ds-bundle: {"format":4,"namespace":"CaraABrownDesignSystem_6758f7","components":[{"name":"ExpertiseGrid","sourcePath":"components/document/ExpertiseGrid.jsx"},{"name":"HBar","sourcePath":"components/document/HBar.jsx"},{"name":"JobBlock","sourcePath":"components/document/JobBlock.jsx"},{"name":"MatchTable","sourcePath":"components/document/MatchTable.jsx"},{"name":"PrintBar","sourcePath":"components/document/PrintBar.jsx"},{"name":"ResumeFooter","sourcePath":"components/document/ResumeFooter.jsx"},{"name":"ResumeHeader","sourcePath":"components/document/ResumeHeader.jsx"},{"name":"SectionLabel","sourcePath":"components/document/SectionLabel.jsx"},{"name":"Synopsis","sourcePath":"components/document/Synopsis.jsx"}],"sourceHashes":{"components/document/ExpertiseGrid.jsx":"b8c14b87c9db","components/document/HBar.jsx":"15d16318628f","components/document/JobBlock.jsx":"97b8173ed56d","components/document/MatchTable.jsx":"1d5c7a872b0f","components/document/PrintBar.jsx":"c4a476afbaf7","components/document/ResumeFooter.jsx":"10c948f6adf1","components/document/ResumeHeader.jsx":"3847e9ac4b51","components/document/SectionLabel.jsx":"dbeb47e0a727","components/document/Synopsis.jsx":"09697445b310","ui_kits/cover-letter/CoverLetter.jsx":"c77ffac735d2","ui_kits/resume/Resume.jsx":"be51fc8161c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CaraABrownDesignSystem_6758f7 = window.CaraABrownDesignSystem_6758f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/document/ExpertiseGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ExpertiseGrid — single-column list of competency clusters.
 * Each entry: an uppercase category label + a middot-separated detail line.
 * SINGLE COLUMN ONLY — never a 2-col layout.
 */
function ExpertiseGrid({
  categories = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "block",
      marginBottom: "var(--sp-grid-bot, 0.06in)",
      ...style
    }
  }, rest), categories.map((cat, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label, 6pt)",
      fontWeight: "var(--fw-bold, 700)",
      letterSpacing: "var(--tr-comp, 0.1em)",
      textTransform: "uppercase",
      color: "var(--text-body, #1e1e1c)",
      marginTop: i === 0 ? 0 : "var(--sp-cat-top, 0.02in)"
    }
  }, cat.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-detail, 7pt)",
      fontWeight: "var(--fw-light, 300)",
      lineHeight: "var(--lh-detail, 1.45)",
      color: "var(--text-muted, #888680)"
    }
  }, (cat.items || []).join(" · ")))));
}
Object.assign(__ds_scope, { ExpertiseGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ExpertiseGrid.jsx", error: String((e && e.message) || e) }); }

// components/document/HBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HBar — the 2px accent bar that sits under the header on page 1.
 * The recurring brand device. Page 1 only in resumes.
 */
function HBar({
  margin = "0.11in 0",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: "var(--hbar-height, 2px)",
      background: "var(--accent-primary, #2a4080)",
      margin,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { HBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/HBar.jsx", error: String((e && e.message) || e) }); }

// components/document/JobBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JobBlock — one role: org + date header, accent job title, and em-dash bullets.
 * Bullets are rendered with a CSS-style '—' marker via ::before-equivalent absolute
 * positioning. Wrap metrics in <strong> inside bullet nodes.
 */
function JobBlock({
  org,
  date,
  title,
  bullets = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginBottom: "var(--sp-job-bot, 0.07in)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "0.2in"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-company, 8.5pt)",
      fontWeight: "var(--fw-bold, 700)",
      letterSpacing: "var(--tr-company, 0.04em)",
      textTransform: "uppercase",
      color: "var(--text-name, #0d0d0b)"
    }
  }, org), date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-detail, 7pt)",
      fontWeight: "var(--fw-light, 300)",
      letterSpacing: "var(--tr-company, 0.04em)",
      color: "var(--text-muted, #888680)",
      whiteSpace: "nowrap"
    }
  }, date)), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-job-title, 8pt)",
      fontWeight: "var(--fw-medium, 600)",
      color: "var(--text-accent, #2a4080)",
      marginBottom: "var(--sp-label-bot, 0.05in)"
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: "relative",
      paddingLeft: "var(--sp-bullet-indent, 0.15in)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body, 7.5pt)",
      fontWeight: "var(--fw-regular, 400)",
      lineHeight: "var(--lh-body, 1.5)",
      color: "var(--text-body, #1e1e1c)",
      marginBottom: "var(--sp-bullet-bot, 0.02in)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      color: "var(--text-accent, #2a4080)",
      fontWeight: "var(--fw-medium, 600)"
    },
    "aria-hidden": "true"
  }, "\u2014"), b))));
}
Object.assign(__ds_scope, { JobBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/JobBlock.jsx", error: String((e && e.message) || e) }); }

// components/document/MatchTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MatchTable — the cover-letter needs/abilities table. Plain and minimal:
 * navy header row, white data rows (no zebra striping, no tint), hairline borders.
 */
function MatchTable({
  headers = ["Your Requirements", "My Qualifications"],
  rows = [],
  leftWidth = "42%",
  style = {},
  ...rest
}) {
  const th = {
    background: "var(--surface-band, #1a2744)",
    color: "var(--cab-white, #ffffff)",
    fontFamily: "var(--font-sans)",
    fontSize: "7.5pt",
    fontWeight: "var(--fw-bold, 700)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "8px 12px",
    border: "1px solid var(--border-rule, #dddad3)",
    textAlign: "left"
  };
  const td = {
    background: "var(--cab-white, #ffffff)",
    fontFamily: "var(--font-sans)",
    fontSize: "9pt",
    fontWeight: "var(--fw-regular, 400)",
    color: "var(--text-body, #1e1e1c)",
    lineHeight: 1.55,
    padding: "8px 12px",
    border: "1px solid var(--border-rule, #dddad3)",
    verticalAlign: "top"
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: "100%",
      borderCollapse: "collapse",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: leftWidth
    }
  }, headers[0]), /*#__PURE__*/React.createElement("th", {
    style: th
  }, headers[1]))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r[1])))));
}
Object.assign(__ds_scope, { MatchTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/MatchTable.jsx", error: String((e && e.message) || e) }); }

// components/document/PrintBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PrintBar — the fixed navy instruction bar shown on screen only, with a
 * "Save as PDF" button that calls window.print(). Hidden in @media print.
 * Give it className "print-bar" so a print stylesheet can hide it.
 */
function PrintBar({
  label = "Print to Letter · Margins: None · Background graphics: On",
  buttonText = "Save as PDF",
  onPrint,
  style = {},
  ...rest
}) {
  const handle = onPrint || (() => {
    if (typeof window !== "undefined") window.print();
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "print-bar",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      padding: "10px 18px",
      background: "var(--surface-band, #1a2744)",
      color: "var(--cab-white, #ffffff)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "8.5pt",
      fontWeight: "var(--fw-light, 300)",
      letterSpacing: "0.04em",
      opacity: 0.85
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: handle,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "8pt",
      fontWeight: "var(--fw-medium, 600)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--surface-band, #1a2744)",
      background: "var(--cab-white, #ffffff)",
      border: "none",
      borderRadius: "2px",
      padding: "7px 16px",
      cursor: "pointer"
    }
  }, buttonText));
}
Object.assign(__ds_scope, { PrintBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/PrintBar.jsx", error: String((e && e.message) || e) }); }

// components/document/ResumeFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ResumeFooter — mandatory on every page. Name · page marker · portfolio.
 * Pins to the bottom of a flex-column .page via marginTop:auto.
 */
function ResumeFooter({
  name = "Cara A. Brown, MBA",
  page = 1,
  total = 2,
  portfolio = "caraabrown.com",
  style = {},
  ...rest
}) {
  const cell = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-footer, 6pt)",
    fontWeight: "var(--fw-light, 300)",
    letterSpacing: "0.05em",
    color: "var(--text-muted, #888680)"
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: "var(--sp-footer-top, 0.08in)",
      borderTop: "1px solid var(--border-rule, #dddad3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, name), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, "Page ", page, " of ", total), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, portfolio));
}
Object.assign(__ds_scope, { ResumeFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ResumeFooter.jsx", error: String((e && e.message) || e) }); }

// components/document/ResumeHeader.jsx
try { (() => {
/**
 * ResumeHeader — name / role line / contact, optionally followed by the HBar.
 * The title line is capped at 3 role items and must fit on one line.
 */
function ResumeHeader({
  name = "Cara A. Brown",
  suffix = "MBA",
  titles = [],
  contact = [],
  hbar = true,
  hbarMargin = "0.11in 0"
}) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-name, 25pt)",
      fontWeight: "var(--fw-bold, 700)",
      letterSpacing: "var(--tr-name, -0.02em)",
      color: "var(--text-name, #0d0d0b)",
      lineHeight: 1.1,
      marginBottom: "1px"
    }
  }, name, suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-light, 300)"
    }
  }, ", ", suffix) : null), titles.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-title, 7.5pt)",
      fontWeight: "var(--fw-medium, 600)",
      letterSpacing: "var(--tr-title, 0.09em)",
      textTransform: "uppercase",
      color: "var(--text-accent, #2a4080)",
      whiteSpace: "nowrap"
    }
  }, titles.slice(0, 3).join("  ·  ")), contact.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body, 7.5pt)",
      fontWeight: "var(--fw-light, 300)",
      letterSpacing: "var(--tr-contact, 0.03em)",
      color: "var(--text-muted, #888680)",
      marginTop: "2px"
    }
  }, contact.join(" · ")), hbar && /*#__PURE__*/React.createElement(__ds_scope.HBar, {
    margin: hbarMargin
  }));
}
Object.assign(__ds_scope, { ResumeHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/ResumeHeader.jsx", error: String((e && e.message) || e) }); }

// components/document/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the uppercase, tracked, accent-colored label with a
 * hairline rule beneath it. Introduces every major document section.
 */
function SectionLabel({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label, 6pt)",
      fontWeight: "var(--fw-bold, 700)",
      letterSpacing: "var(--tr-label, 0.08em)",
      textTransform: "uppercase",
      color: "var(--text-accent, #2a4080)",
      borderBottom: "1px solid var(--border-rule, #dddad3)",
      paddingBottom: "var(--sp-label-pad, 0.02in)",
      marginTop: "var(--sp-label-top, 0.06in)",
      marginBottom: "var(--sp-label-bot, 0.05in)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/document/Synopsis.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Synopsis — the single credential-forward paragraph. Factual, not narrative.
 * Wrap key capability clusters in <strong> for the bold callout treatment.
 */
function Synopsis({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body, 7.5pt)",
      fontWeight: "var(--fw-regular, 400)",
      lineHeight: "var(--lh-body, 1.5)",
      color: "var(--text-body, #1e1e1c)",
      margin: 0,
      marginBottom: "var(--sp-synopsis-bot, 0.05in)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Synopsis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Synopsis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cover-letter/CoverLetter.jsx
try { (() => {
/* Cover Letter — one-page recreation with header lockup, body paragraphs,
   and the needs/abilities match table. Registers itself on window. */
function CoverLetter() {
  const {
    ResumeHeader,
    MatchTable
  } = window.CaraABrownDesignSystem_6758f7;
  const para = {
    fontFamily: "var(--font-sans)",
    fontSize: "10pt",
    fontWeight: 400,
    lineHeight: 1.65,
    color: "var(--cab-ink)",
    margin: "0 0 0.18in"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      width: "8.5in",
      minHeight: "11in",
      background: "var(--surface-page, #fff)",
      boxShadow: "0 3px 18px rgba(0,0,0,0.18)",
      padding: "0.5in 0.75in",
      boxSizing: "border-box",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ResumeHeader, {
    titles: ["Principal Service Designer", "AI Adoption Strategist", "Transformation Leader"],
    contact: ["(202) 489-9901", "hi@caraabrown.com", "caraabrown.com (portfolio)"],
    hbarMargin: "0.05in 0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "9pt",
      color: "var(--cab-mid)",
      margin: "0.12in 0 0.18in"
    }
  }, "June 2026"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "Dear Hiring Committee,"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "I am writing to express my interest in the Principal Service Designer role. Over the past several years I have led enterprise-scale service design across logistics, e-commerce, and public-sector delivery \u2014 translating ambiguous executive goals into measurable, durable outcomes. The table below maps your requirements to the work I have actually shipped."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0.18in 0"
    }
  }, /*#__PURE__*/React.createElement(MatchTable, {
    headers: ["Your Requirements", "My Qualifications"],
    rows: [["Enterprise service design leadership", /*#__PURE__*/React.createElement(React.Fragment, null, "Led end-to-end service design across a 34-DC network at Kroger. ", /*#__PURE__*/React.createElement("strong", null, "NPS \u221236 \u2192 +49."))], ["Executive stakeholder alignment", "Co-authored the transportation strategy that aligned $24M in annual technology investment."], ["Turning around stalled initiatives", "Revived a stalled $270M/week trailer-tracking initiative in four months."], ["Cross-functional facilitation", "Facilitated co-design across Product, Engineering, Operations, HR, and Finance."]]
  })), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "I would welcome the chance to discuss how this approach could serve your team. Thank you for your consideration."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...para,
      marginBottom: "0.04in"
    }
  }, "Sincerely,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10pt",
      fontWeight: 700,
      color: "var(--cab-black)"
    }
  }, "Cara A. Brown, MBA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "9pt",
      fontWeight: 300,
      color: "var(--cab-mid)",
      marginTop: "2px"
    }
  }, "(202) 489-9901 \xB7 hi@caraabrown.com \xB7 caraabrown.com"));
}
window.CoverLetter = CoverLetter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cover-letter/CoverLetter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume/Resume.jsx
try { (() => {
/* Resume — auto-paginating, print-ready.
   Content is a single flat stream of atomic blocks. A measure pass packs
   them greedily into 8.5x11in pages: each page fills naturally, breaks at
   the bullet level (no white-space gap larger than ~3 lines), and carries
   an intact footer pinned to the bottom. No content is locked to a page. */
function ResumeDocument() {
  const {
    ResumeHeader,
    SectionLabel,
    Synopsis,
    ExpertiseGrid
  } = window.CaraABrownDesignSystem_6758f7;
  const {
    useState,
    useRef,
    useLayoutEffect
  } = React;
  const B = React.Fragment;

  /* ---- geometry (US Letter @ 96dpi) ---- */
  const DPI = 96;
  const PAGE_H = 11 * DPI; // 1056
  const PAD_X = 0.6 * DPI; // 57.6
  const PAD_Y = 0.28 * DPI; // 26.88
  const CONTENT_W = 8.5 * DPI - PAD_X * 2; // 700.8
  const FOOTER_RESERVE = 40; // footer + gap
  const AVAIL = PAGE_H - PAD_Y * 2 - FOOTER_RESERVE;

  /* ---- inline pieces (job header + single bullet as separate atoms so a
         role's bullets can flow across a page break without repeating) ---- */
  function JobHead({
    org,
    date,
    title,
    first
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: first ? 0 : "0.07in"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "0.2in"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "8.5pt",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--cab-black)"
      }
    }, org), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "7pt",
        fontWeight: 300,
        letterSpacing: "0.04em",
        color: "var(--cab-mid)",
        whiteSpace: "nowrap"
      }
    }, date)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "8pt",
        fontWeight: 600,
        color: "var(--cab-accent)",
        marginTop: "1px"
      }
    }, title));
  }
  function Bullet({
    children,
    last
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        paddingLeft: "0.15in",
        fontSize: "7.5pt",
        lineHeight: 1.5,
        color: "var(--cab-ink)",
        marginTop: "0.03in",
        marginBottom: last ? 0 : "0.02in"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        color: "var(--cab-accent)",
        fontWeight: 600
      },
      "aria-hidden": "true"
    }, "\u2014"), children);
  }
  function EduRow({
    deg,
    school
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        marginTop: "0.02in"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 3in",
        fontSize: "8pt",
        fontWeight: 600,
        color: "var(--cab-black)"
      }
    }, deg), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "7.5pt",
        fontWeight: 300,
        color: "var(--cab-mid)"
      }
    }, school));
  }

  /* ---- the single content stream (atomic blocks) ----
     keep = keep-with-next (don't orphan a label/header at a page bottom) */
  const blocks = [];
  const add = (node, keep = false) => blocks.push({
    node,
    keep
  });
  add(/*#__PURE__*/React.createElement(ResumeHeader, {
    titles: ["Principal Service Designer", "AI Adoption & Operations Strategist", "Enterprise Transformation Leader"],
    contact: ["(202) 489-9901", "hi@caraabrown.com", "caraabrown.com (portfolio)"],
    hbarMargin: "0.11in 0"
  }));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Synopsis"), true);
  add(/*#__PURE__*/React.createElement(Synopsis, null, "Proven Principal Service Designer with enterprise-scale impact across logistics, e-commerce, global employee experience, public sector, and nonprofit delivery \u2014 specializing in", " ", /*#__PURE__*/React.createElement("strong", null, "end-to-end service design, systems diagnosis, and experience strategy"), ". Leads complex initiatives from discovery through implementation: service blueprinting, journey mapping, operational diagnosis, stakeholder alignment, and experience infrastructure that makes outcomes stick. Revived a stalled $270M/week trailer-tracking initiative in four months, drove NPS from \u221236 to +49 across 34 distribution centers, and co-authored the transportation strategy that aligned $24M in annual technology investment. Decisive, cross-functional partner fluent in both executive visioning and ground-level operations. MBA, Design Strategy \u2014 California College of the Arts, ranked #2 graduate design program globally."));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Areas of Expertise"), true);
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Service Design",
      items: ["Service blueprinting", "Journey mapping", "Ecosystem modeling", "Experience prototyping", "Storyboarding"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Research & Synthesis",
      items: ["User interviews", "Qualitative synthesis", "Usability testing", "Persona development", "Insight prioritization"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Facilitation",
      items: ["Workshop facilitation", "Co-creation sessions", "Executive alignment", "Stakeholder management"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Strategy & Operations",
      items: ["Operating-model design", "Service diagnosis", "Experience strategy", "Measurement & KPIs", "Implementation roadmapping"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Experience Infrastructure",
      items: ["Ownership models", "Service governance", "Design operating rhythm", "Blueprint libraries"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Domains",
      items: ["Logistics & transportation", "E-commerce", "Employee experience", "Public sector", "Nonprofit delivery"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Ways of Working",
      items: ["Discovery to implementation", "Cross-functional co-design", "Executive storytelling", "Operational diagnosis"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Tools"), true);
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "",
      items: ["Figma", "Miro", "FigJam", "Mural", "Microsoft 365", "Confluence", "Jira", "Adobe Creative Suite"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Professional Experience"), true);
  const jobs = [{
    org: "Alanne International",
    date: "01/2026 – Present · Remote",
    title: "Principal Service Designer — AI Adoption & Transformation",
    bullets: ["Advise enterprise clients on AI adoption strategy, operating-model redesign, and experience infrastructure that makes transformation durable.", "Lead diagnostic engagements translating ambiguous executive goals into scoped, measurable service-design programs.", "Design decision frameworks that help leadership sequence investment against operational readiness.", "Coach internal design and product teams to sustain the work after the engagement ends."]
  }, {
    org: "Kroger",
    date: "03/2022 – 09/2025 · Cincinnati, OH (Remote)",
    title: "Senior Service Designer — Enterprise Transportation & Logistics",
    bullets: [/*#__PURE__*/React.createElement(B, null, "Led end-to-end service design across a 34-DC enterprise network \u2014 service blueprinting, journey mapping, and experience prototyping. ", /*#__PURE__*/React.createElement("strong", null, "NPS: \u221236 \u2192 +49. Driver satisfaction: 36% \u2192 74%.")), "Facilitated co-design workshops across Product, Engineering, Operations, HR, and Finance to align stakeholders around shared service outcomes.", /*#__PURE__*/React.createElement(B, null, "Revived a stalled $270M/week trailer-tracking initiative in four months by reframing it as a diagnostic and operations problem."), "Co-authored the transportation strategy that aligned $24M in annual technology investment across the enterprise portfolio.", "Built the measurement model — service KPIs, satisfaction instrumentation, and executive dashboards — that made progress legible to leadership.", "Established a reusable service-blueprint library and design operating rhythm adopted across the transportation portfolio."]
  }, {
    org: "Global Employee Experience Practice",
    date: "2019 – 2022 · Distributed",
    title: "Service Designer — Workforce & Operations",
    bullets: ["Redesigned onboarding and internal-mobility journeys for a distributed workforce, cutting time-to-productivity and reducing early attrition.", "Built the experience infrastructure — blueprints, measurement, ownership models — that kept improvements in place after launch.", "Ran discovery research across regions to diagnose friction in the employee lifecycle and prioritize the highest-impact interventions.", "Partnered with HR, IT, and Facilities to align a fragmented set of touchpoints into a single coherent employee journey.", "Established measurement and ownership so experience improvements survived reorganizations and leadership change."]
  }, {
    org: "Public Sector & Civic Delivery",
    date: "2016 – 2019 · Oakland, CA",
    title: "Service Designer — Government & Nonprofit Programs",
    bullets: ["Designed public-facing service journeys for housing, access, and equity programs serving vulnerable populations.", "Facilitated cross-agency co-design to align policy intent with the lived experience of residents on the ground.", "Delivered service blueprints and implementation roadmaps that translated civic goals into operable programs.", "Ran participatory research with residents and frontline staff to surface friction invisible to program owners."]
  }, {
    org: "GardaWorld",
    date: "2014 – 2016 · Distributed",
    title: "Experience & Operations Designer — Field Services",
    bullets: ["Mapped field-service operations across high-security, distributed environments to expose hand-off and reliability gaps.", "Standardized frontline service protocols and training touchpoints, improving consistency across sites.", "Instrumented service performance so regional leaders could see and act on operational drift.", "Redesigned shift-handoff and reporting touchpoints to reduce errors and rework."]
  }, {
    org: "Keyways",
    date: "2012 – 2014 · Oakland, CA",
    title: "Service Strategist — Housing & Access",
    bullets: ["Diagnosed the end-to-end applicant journey for public-facing housing and access programs.", "Redesigned intake and eligibility touchpoints to reduce drop-off and shorten time to placement.", "Aligned caseworkers, partners, and leadership around a shared model of the resident experience.", "Built lightweight measurement so program teams could track outcomes without new systems."]
  }];
  jobs.forEach((j, ji) => {
    add(/*#__PURE__*/React.createElement(JobHead, {
      org: j.org,
      date: j.date,
      title: j.title,
      first: ji === 0
    }), true);
    j.bullets.forEach((b, bi) => add(/*#__PURE__*/React.createElement(Bullet, {
      last: bi === j.bullets.length - 1
    }, b)));
  });
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Selected Engagements & Outcomes"), true);
  [/*#__PURE__*/React.createElement(B, null, /*#__PURE__*/React.createElement("strong", null, "NPS \u221236 \u2192 +49"), " across 34 distribution centers by reframing a stalled technology rollout as a service and operations problem."), /*#__PURE__*/React.createElement(B, null, "Revived a ", /*#__PURE__*/React.createElement("strong", null, "$270M/week"), " trailer-tracking initiative in four months and returned it to executive confidence."), /*#__PURE__*/React.createElement(B, null, "Co-authored the transportation strategy that aligned ", /*#__PURE__*/React.createElement("strong", null, "$24M"), " in annual technology investment across the enterprise portfolio."), "Stood up service-design operating rhythms and blueprint libraries reused across multiple enterprise teams.", "Reduced onboarding time-to-productivity and early attrition through a redesigned employee-experience journey.", "Shortened time-to-placement in public housing programs by redesigning intake and eligibility touchpoints."].forEach((b, i, a) => add(/*#__PURE__*/React.createElement(Bullet, {
    last: i === a.length - 1
  }, b)));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Additional Experience"), true);
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "City of Oakland / Lab@OPM",
      items: ["Public-sector service design and civic delivery — CloseTheGap equity initiative"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Nonprofit & Community Delivery",
      items: ["Program design and facilitation for community-serving organizations across the Bay Area"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(ExpertiseGrid, {
    categories: [{
      label: "Earlier Experience",
      items: ["Design research, program operations, and frontline service roles across nonprofit and public delivery"]
    }]
  }));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Education & Certifications"), true);
  add(/*#__PURE__*/React.createElement(EduRow, {
    deg: "MBA, Design Strategy",
    school: "California College of the Arts \u2014 ranked #2 graduate design program globally"
  }));
  add(/*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "7pt",
      fontWeight: 300,
      lineHeight: 1.55,
      color: "var(--cab-ink)",
      marginTop: "0.03in"
    }
  }, "Certified Service Design Practitioner \xB7 Human-Centered Design \xB7 Systems Thinking \xB7 LUMA Facilitation \xB7 Design Research \xB7 Journey Mapping"));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Selected Recognition & Speaking"), true);
  add(/*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "7pt",
      fontWeight: 300,
      lineHeight: 1.55,
      color: "var(--cab-ink)"
    }
  }, "Invited speaker on enterprise service design and AI adoption \xB7 Guest lecturer and portfolio reviewer for graduate service-design programs \xB7 Contributor to service-design practice communities"));
  add(/*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "7pt",
      fontWeight: 300,
      lineHeight: 1.55,
      color: "var(--cab-ink)",
      marginTop: "0.03in"
    }
  }, "Mentor for early-career designers transitioning into service design \xB7 Volunteer facilitator for civic and nonprofit design initiatives"));
  add(/*#__PURE__*/React.createElement(SectionLabel, null, "Leadership & Affiliations"), true);
  add(/*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "7pt",
      fontWeight: 300,
      lineHeight: 1.55,
      color: "var(--cab-ink)"
    }
  }, "Service Design Network \xB7 Interaction Design Association (IxDA) \xB7 Guest critic and mentor, graduate design programs"));
  add(/*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "7pt",
      fontWeight: 300,
      lineHeight: 1.55,
      color: "var(--cab-ink)",
      marginTop: "0.03in"
    }
  }, "Advocate for making invisible service domains legible to leadership \xB7 Frequent collaborator with operations and frontline teams"));

  /* ---- measure + paginate ---- */
  const measureRef = useRef(null);
  const [pages, setPages] = useState(null);
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const kids = Array.from(el.children);
    const tops = kids.map(k => k.offsetTop);
    const total = el.scrollHeight;
    const heights = kids.map((k, i) => i < kids.length - 1 ? tops[i + 1] - tops[i] : total - tops[i]);
    const packed = [];
    let cur = [];
    let used = 0;
    for (let i = 0; i < blocks.length; i++) {
      const h = heights[i];
      const needsNext = blocks[i].keep && i + 1 < blocks.length;
      const need = h + (needsNext ? heights[i + 1] : 0);
      if (cur.length && used + need > AVAIL) {
        packed.push(cur);
        cur = [];
        used = 0;
      }
      cur.push(i);
      used += h;
    }
    if (cur.length) packed.push(cur);
    setPages(packed);
  }, []);
  const pageStyle = {
    width: "8.5in",
    height: "11in",
    background: "var(--surface-page, #fff)",
    boxShadow: "0 3px 18px rgba(0,0,0,0.18)",
    padding: `${PAD_Y}px ${PAD_X}px`,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto 28px",
    overflow: "hidden"
  };

  /* measure pass (hidden) */
  if (!pages) {
    return /*#__PURE__*/React.createElement("div", {
      ref: measureRef,
      style: {
        position: "absolute",
        left: -99999,
        top: 0,
        width: CONTENT_W,
        fontFamily: "var(--font-sans)",
        visibility: "hidden"
      }
    }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, b.node)));
  }

  /* paginated render */
  return /*#__PURE__*/React.createElement("div", null, pages.map((idxs, p) => /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: pageStyle,
    key: p
  }, /*#__PURE__*/React.createElement("div", null, idxs.map(i => /*#__PURE__*/React.createElement("div", {
    key: i
  }, blocks[i].node))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: "0.08in",
      borderTop: "1px solid var(--border-rule, #dddad3)"
    }
  }, ["Cara A. Brown, MBA", `Page ${p + 1} of ${pages.length}`, "caraabrown.com"].map((t, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontSize: "6pt",
      fontWeight: 300,
      letterSpacing: "0.05em",
      color: "var(--text-muted, #888680)"
    }
  }, t))))));
}
window.ResumeDocument = ResumeDocument;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/Resume.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExpertiseGrid = __ds_scope.ExpertiseGrid;

__ds_ns.HBar = __ds_scope.HBar;

__ds_ns.JobBlock = __ds_scope.JobBlock;

__ds_ns.MatchTable = __ds_scope.MatchTable;

__ds_ns.PrintBar = __ds_scope.PrintBar;

__ds_ns.ResumeFooter = __ds_scope.ResumeFooter;

__ds_ns.ResumeHeader = __ds_scope.ResumeHeader;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Synopsis = __ds_scope.Synopsis;

})();
