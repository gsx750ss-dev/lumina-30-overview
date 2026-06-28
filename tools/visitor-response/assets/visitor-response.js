

const LABELS = {
  en: {
    categories: {
      "pre-adoption-concern": "Pre-adoption concern",
      "applied-result": "Result after applying the question",
      "review-insertion": "Suggestion for inserting it into an existing review",
      "boundary-case": "Boundary case where judgment was difficult",
      "objection-critique": "Objection, critique, or discomfort",
      "improvement": "Improvement proposal",
      "other": "Other"
    },
    roles: {
      "ai-governance-safety": "AI governance / AI safety",
      "enterprise-ai-procurement-audit": "Enterprise AI adoption / procurement / audit",
      "security-review": "Security review",
      "incident-review": "Incident review",
      "researcher-student": "Researcher / student",
      "policy-legal-compliance": "Policy / legal / compliance",
      "ai-observer-communicator": "AI observer / communicator",
      "general-interest": "General interest",
      "other": "Other"
    },
    domains: {
      "ai-adoption": "AI adoption decision",
      "ai-procurement": "AI procurement",
      "ai-audit": "AI audit",
      "security-review": "Security review",
      "incident-review": "Incident review",
      "autonomous-agent": "Autonomous agent",
      "critical-operations": "Critical infrastructure / operations",
      "research-development": "Research and development",
      "governance-institutional-design": "Governance / institutional design",
      "other": "Other"
    },
    stages: {
      "reading": "Still reading",
      "considering-fit": "Considering whether it fits my context",
      "finding-insertion-point": "Looking for where to insert it into an existing review",
      "tried-one-case": "Tried it on one case",
      "shared-in-organization": "Shared it inside an organization",
      "used-in-decision": "Used it in an actual decision / stop / review",
      "other": "Other"
    },
    scopes: {
      "public-ok": "May remain as a public post",
      "anonymous-generalize": "Please handle anonymously / generally",
      "confirm-before-quote": "Please confirm before quoting as an example",
      "do-not-publish-yet": "Do not treat as a public example yet"
    },
    submitSuccess: "Received. It will not appear publicly until reviewed and anonymized.",
    submitFail: "Submission failed. Please try again later.",
    loading: "Loading responses...",
    none: "No reviewed public responses are available yet.",
    posted: "Posted",
    status: "Status",
    id: "ID",
    sample: "Sample",
    removed: "Removed"
  },
  ja: {
    categories: {
      "pre-adoption-concern": "一問を自分の現場に当てる前の悩み",
      "applied-result": "実際に一問を当ててみた結果",
      "review-insertion": "既存レビューへの挿入案",
      "boundary-case": "判断に迷った境界事例",
      "objection-critique": "反論・批判・違和感",
      "improvement": "改善提案",
      "other": "その他"
    },
    roles: {
      "ai-governance-safety": "AI governance / AI safety 関係者",
      "enterprise-ai-procurement-audit": "企業のAI導入・調達・監査担当",
      "security-review": "セキュリティレビュー担当",
      "incident-review": "インシデントレビュー担当",
      "researcher-student": "研究者・学生",
      "policy-legal-compliance": "政策・法務・コンプライアンス関係者",
      "ai-observer-communicator": "AI動向を読む・発信する人",
      "general-interest": "一般の関心者",
      "other": "その他"
    },
    domains: {
      "ai-adoption": "AI導入判断",
      "ai-procurement": "AI調達",
      "ai-audit": "AI監査",
      "security-review": "セキュリティレビュー",
      "incident-review": "インシデントレビュー",
      "autonomous-agent": "自律エージェント",
      "critical-operations": "重要インフラ・業務運用",
      "research-development": "研究開発",
      "governance-institutional-design": "ガバナンス・制度設計",
      "other": "その他"
    },
    stages: {
      "reading": "まだ読んでいる段階",
      "considering-fit": "自分の現場に当てられるか悩んでいる段階",
      "finding-insertion-point": "既存レビューへ入れる場所を探している段階",
      "tried-one-case": "試しに一件へ当てた段階",
      "shared-in-organization": "組織内で共有した段階",
      "used-in-decision": "実際の判断・停止・見直しに使った段階",
      "other": "その他"
    },
    scopes: {
      "public-ok": "公開投稿として残してよい",
      "anonymous-generalize": "匿名・一般化して扱ってほしい",
      "confirm-before-quote": "事例として引用する場合は要確認",
      "do-not-publish-yet": "まだ公開事例として扱わないでほしい"
    },
    submitSuccess: "受け付けました。確認・匿名化されるまで公開一覧には表示されません。",
    submitFail: "送信に失敗しました。時間をおいて再度試してください。",
    loading: "投稿を読み込み中...",
    none: "レビュー済みの公開投稿はまだありません。",
    posted: "投稿日",
    status: "状態",
    id: "ID",
    sample: "サンプル",
    removed: "非表示化"
  }
};

function apiBase() {
  return (window.L30_RESPONSE_API_BASE || "").replace(/\/$/, "");
}

function optionEntries(kind, locale) {
  return Object.entries(LABELS[locale][kind]);
}

function fillSelect(select, entries, selected = "") {
  select.innerHTML = "";
  for (const [value, label] of entries) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    if (value === selected) opt.selected = true;
    select.appendChild(opt);
  }
}

function initCommonSelects(locale) {
  const maps = [
    ["category", "categories"],
    ["role", "roles"],
    ["domain", "domains"],
    ["stage", "stages"],
    ["public_scope", "scopes"]
  ];
  for (const [id, kind] of maps) {
    const el = document.getElementById(id);
    if (el) fillSelect(el, optionEntries(kind, locale));
  }
}

function setStatus(message, ok = true) {
  const el = document.getElementById("status");
  if (!el) return;
  el.className = `status ${ok ? "ok" : "error"}`;
  el.textContent = message;
}

function readForm(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  data.turnstileToken = data["cf-turnstile-response"] || data.turnstileToken || "";
  data.board_id = window.L30_RESPONSE_BOARD_ID || "one-question-response-2026-06";
  data.locale = document.body.dataset.locale || "en";
  return data;
}

async function initSubmit(locale) {
  initCommonSelects(locale);
  const form = document.getElementById("response-form");
  if (!form) return;

  const siteKey = window.L30_TURNSTILE_SITE_KEY || "";
  const turnstileBox = document.getElementById("turnstile-box");
  if (siteKey && turnstileBox) {
    const wait = setInterval(() => {
      if (window.turnstile) {
        clearInterval(wait);
        window.turnstile.render("#turnstile-box", { sitekey: siteKey });
      }
    }, 100);
    setTimeout(() => clearInterval(wait), 5000);
  }

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const base = apiBase();
    if (!base) {
      setStatus("API base URL is not configured. Copy config.example.js to config.js and set the Worker URL.", false);
      return;
    }
    const payload = readForm(form);
    try {
      const res = await fetch(`${base}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "submit failed");
      form.reset();
      initCommonSelects(locale);
      if (window.turnstile) window.turnstile.reset();
      setStatus(`${LABELS[locale].submitSuccess} ${json.public_id ? `(${json.public_id})` : ""}`, true);
    } catch (err) {
      setStatus(`${LABELS[locale].submitFail} ${err.message || ""}`, false);
    }
  });
}

function displayLabel(kind, value, locale) {
  return (LABELS[locale][kind] && LABELS[locale][kind][value]) || value || "-";
}

function formatDate(value, locale) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en", { dateStyle: "medium", timeStyle: "short" }).format(d);
}

async function loadResponses(locale) {
  const list = document.getElementById("responses-list");
  if (!list) return;
  const base = apiBase();
  if (!base) {
    list.innerHTML = `<div class="empty">API base URL is not configured.</div>`;
    return;
  }
  list.innerHTML = `<div class="empty">${LABELS[locale].loading}</div>`;
  const category = document.getElementById("category")?.value || "";
  const role = document.getElementById("role")?.value || "";
  const domain = document.getElementById("domain")?.value || "";
  const stage = document.getElementById("stage")?.value || "";
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (role) params.set("role", role);
  if (domain) params.set("domain", domain);
  if (stage) params.set("stage", stage);
  params.set("board_id", window.L30_RESPONSE_BOARD_ID || "one-question-response-2026-06");
  params.set("locale", locale);
  params.set("limit", "50");

  try {
    const res = await fetch(`${base}/api/responses?${params.toString()}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "load failed");
    const items = json.items || [];
    if (!items.length) {
      list.innerHTML = `<div class="empty">${LABELS[locale].none}</div>`;
      return;
    }
    list.innerHTML = "";
    for (const item of items) {
      const card = document.createElement("article");
      card.className = "response-card";
      const title = document.createElement("h3");
      title.textContent = item.public_title || item.title || "Untitled";
      const meta = document.createElement("div");
      meta.className = "meta";
      const metaItems = [
        `${LABELS[locale].id}: ${item.public_id}`,
        item.is_sample ? LABELS[locale].sample : "",
        item.status === "tombstone" ? LABELS[locale].removed : "",
        `${LABELS[locale].posted}: ${formatDate(item.published_at || item.created_at, locale)}`,
        displayLabel("categories", item.category, locale),
        displayLabel("roles", item.role, locale),
        displayLabel("domains", item.domain, locale),
        displayLabel("stages", item.stage, locale)
      ].filter(Boolean);
      for (const m of metaItems) {
        const span = document.createElement("span");
        span.className = "badge";
        span.textContent = m;
        meta.appendChild(span);
      }
      const p = document.createElement("p");
      p.textContent = item.status === "tombstone" ? (item.public_summary || item.tombstone_reason || "Removed") : (item.public_summary || item.public_body || "");
      card.appendChild(meta);
      card.appendChild(title);
      card.appendChild(p);
      list.appendChild(card);
    }
  } catch (err) {
    list.innerHTML = `<div class="empty">${err.message || "Load failed"}</div>`;
  }
}

function initResponses(locale) {
  initCommonSelects(locale);
  const emptyAny = document.createElement("option");
  emptyAny.value = "";
  emptyAny.textContent = locale === "ja" ? "すべて" : "All";
  for (const id of ["category", "role", "domain", "stage"]) {
    const select = document.getElementById(id);
    if (select) {
      select.prepend(emptyAny.cloneNode(true));
      select.value = "";
    }
  }
  document.getElementById("apply-filters")?.addEventListener("click", () => loadResponses(locale));
  loadResponses(locale);
}

document.addEventListener("DOMContentLoaded", () => {
  const mode = document.body.dataset.mode;
  const locale = document.body.dataset.locale || "en";
  if (mode === "submit") initSubmit(locale);
  if (mode === "responses") initResponses(locale);
});

