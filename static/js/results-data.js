/* UI-Venus-2.0 project page — benchmark chart data.
 *
 * ── HOW TO FILL IN RESULTS ────────────────────────────────────────────────
 * All chart numbers live in the CHARTS object below. Each bar is
 *   { model, name, sub, org, value, kind, note? }
 *   - model: full canonical name, shown in the hover tooltip
 *   - name : first label line under the bar (short, never wraps)
 *   - sub  : second label line (variant / size), may be ""
 *   - value: number, or null → rendered as a hatched "TBD" ghost bar
 *   - kind : "ours" | "family" | "base"
 *   - note : optional footnote shown in the hover tooltip (e.g. "reproduced")
 * When a UI-Venus-2.0 number lands, replace `value: null` with the number —
 * nothing else needs to change. Keep the <details> tables in index.html in sync.
 * ──────────────────────────────────────────────────────────────────────────
 */
(function () {
  "use strict";


  var GHOST_9B = { model: "UI-Venus-2.0-9B", name: "UI-Venus", sub: "2.0 \u00b7 9B", org: "Ant Group", value: null, kind: "ours" };
  var GHOST_27B = { model: "UI-Venus-2.0-27B", name: "UI-Venus", sub: "2.0 \u00b7 27B", org: "Ant Group", value: null, kind: "ours" };

  var CHARTS = {
    mobile: [
      {
        cat: "Mobile Use", title: "AndroidWorld", metric: "Success rate (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 77.6, kind: "family" },
          { model: "MAI-UI-8B", name: "MAI-UI", sub: "8B", org: "Alibaba", value: 70.7, kind: "base" },
          { model: "Qwen3.6-27B", name: "Qwen3.6", sub: "27B", org: "Alibaba", value: 70.3, kind: "base" },
          { model: "GUI-Owl-1.5-32B-Instruct", name: "GUI-Owl", sub: "1.5 \u00b7 32B", org: "Alibaba", value: 69.8, kind: "base" }
        ]
      },
      {
        cat: "Mobile Use", title: "MobileWorld", metric: "GUI-only success rate (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Qwen-UI-Agent-27B", name: "Qwen-UI", sub: "Agent 27B", org: "Alibaba", value: 82.1, kind: "base" },
          { model: "Seed2.0 Pro", name: "Seed2.0", sub: "Pro", org: "ByteDance", value: 63.2, kind: "base" },
          { model: "Kimi K2.6", name: "Kimi", sub: "K2.6", org: "Moonshot AI", value: 55.6, kind: "base" },
          { model: "Claude Opus 4.6", name: "Opus 4.6", sub: "", org: "Anthropic", value: 44.5, kind: "base" }
        ]
      },
      {
        cat: "Mobile Use", title: "VenusBench-Mobile", metric: "Success rate (%)", max: 40,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 21.5, kind: "family" },
          { model: "UI-Venus-1.5-8B", name: "UI-Venus", sub: "1.5 \u00b7 8B", org: "Ant Group", value: 16.1, kind: "family" },
          { model: "MAI-UI-8B", name: "MAI-UI", sub: "8B", org: "Alibaba", value: 12.7, kind: "base" }
        ]
      }
    ],

    computer: [
      {
        cat: "Computer Use", title: "OSWorld-Verified", metric: "Success rate (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Qwen-UI-Agent-27B", name: "Qwen-UI", sub: "Agent 27B", org: "Alibaba", value: 79.5, kind: "base" },
          { model: "Kimi K2.6", name: "Kimi", sub: "K2.6", org: "Moonshot AI", value: 73.1, kind: "base" },
          { model: "Qwen3.6-27B", name: "Qwen3.6", sub: "27B", org: "Alibaba", value: 62.0, kind: "base" },
          { model: "GUI-Owl-1.5-32B-Instruct", name: "GUI-Owl", sub: "1.5 \u00b7 32B", org: "Alibaba", value: 56.5, kind: "base" }
        ]
      },
      {
        cat: "Computer Use", title: "OSWorld-V2", metric: "Success rate (%)", max: 60,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Qwen-UI-Agent-27B", name: "Qwen-UI", sub: "Agent 27B", org: "Alibaba", value: 40.0, kind: "base" },
          { model: "Kimi K2.6", name: "Kimi", sub: "K2.6", org: "Moonshot AI", value: 22.1, kind: "base" }
        ]
      }
    ],

    web: [
      {
        cat: "Web Navigation", title: "WebVoyager", metric: "Success rate (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Fara-1.5-27B", name: "Fara-1.5", sub: "27B", org: "Microsoft", value: 89.3, kind: "base" },
          { model: "GLM-5V-Turbo", name: "GLM-5V", sub: "Turbo", org: "Zhipu AI", value: 88.5, kind: "base" },
          { model: "Claude Opus 4.6", name: "Opus 4.6", sub: "", org: "Anthropic", value: 88.0, kind: "base" },
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 76.0, kind: "family" }
        ]
      },
      {
        cat: "Web Navigation", title: "Online-Mind2Web", metric: "Success rate (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-TARS-1.5", name: "UI-TARS", sub: "1.5", org: "ByteDance", value: 75.8, kind: "base" },
          { model: "Fara-1.5-27B", name: "Fara-1.5", sub: "27B", org: "Microsoft", value: 72.3, kind: "base" },
          { model: "Seed-2.0", name: "Seed-2.0", sub: "", org: "ByteDance", value: 68.5, kind: "base" },
          { model: "OpenAI Operator", name: "Operator", sub: "", org: "OpenAI", value: 61.3, kind: "base" }
        ]
      },
      {
        cat: "Web Navigation", title: "Odysseys", metric: "Avg. rubric score (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Claude Opus 4.6", name: "Opus 4.6", sub: "", org: "Anthropic", value: 68.9, kind: "base" },
          { model: "Seed-2.0", name: "Seed-2.0", sub: "", org: "ByteDance", value: 60.2, kind: "base" },
          { model: "Qwen3.5-9B", name: "Qwen3.5", sub: "9B", org: "Alibaba", value: 42.6, kind: "base" },
          { model: "Qwen3.6-27B", name: "Qwen3.6", sub: "27B", org: "Alibaba", value: 39.5, kind: "base" }
        ]
      }
    ],

    grounding: [
      {
        cat: "GUI Grounding", title: "ScreenSpot-Pro", metric: "Accuracy (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 69.6, kind: "family" },
          { model: "MAI-UI-32B", name: "MAI-UI", sub: "32B", org: "Alibaba", value: 67.9, kind: "base" },
          { model: "Holo2-30B-A3B", name: "Holo2", sub: "30B", org: "H Company", value: 66.1, kind: "base" },
          { model: "GTA1-32B", name: "GTA1", sub: "32B", org: "Salesforce", value: 63.6, kind: "base" }
        ]
      },
      {
        cat: "GUI Grounding", title: "VenusBench-GD", metric: "Accuracy (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 75.0, kind: "family" },
          { model: "MAI-UI-8B", name: "MAI-UI", sub: "8B", org: "Alibaba", value: 65.2, kind: "base", note: "reproduced, pending verification" },
          { model: "Holo2-30B-A3B", name: "Holo2", sub: "30B", org: "H Company", value: 59.5, kind: "base", note: "reproduced, pending verification" },
          { model: "GTA1-32B", name: "GTA1", sub: "32B", org: "Salesforce", value: 58.8, kind: "base" }
        ]
      },
      {
        cat: "GUI Grounding", title: "UI-Vision", metric: "Accuracy (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "UI-Venus-1.5-30B-A3B", name: "UI-Venus", sub: "1.5", org: "Ant Group", value: 54.7, kind: "family" },
          { model: "MAI-UI-32B", name: "MAI-UI", sub: "32B", org: "Alibaba", value: 47.1, kind: "base" },
          { model: "Holo2-30B-A3B", name: "Holo2", sub: "30B", org: "H Company", value: 40.9, kind: "base", note: "reproduced, pending verification" },
          { model: "OpenCUA-32B", name: "OpenCUA", sub: "32B", org: "XLANG Lab", value: 33.3, kind: "base" }
        ]
      }
    ],

    captcha: [
      {
        cat: "CAPTCHA", title: "VenusBench-CAPTCHA", metric: "Accuracy (%)", max: 100,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "Kimi-K3", name: "Kimi-K3", sub: "", org: "Moonshot AI", value: 56.6, kind: "base" },
          { model: "Qwen3.8-Max", name: "Qwen3.8", sub: "Max", org: "Alibaba", value: 54.3, kind: "base" },
          { model: "Claude Opus 4.8", name: "Opus 4.8", sub: "", org: "Anthropic", value: 45.7, kind: "base" },
          { model: "Doubao-Seed-2.1-Pro", name: "Doubao", sub: "Seed 2.1", org: "ByteDance", value: 45.2, kind: "base" }
        ]
      },
      {
        cat: "CAPTCHA", title: "Spatial-CAPTCHA-Bench", metric: "Pass@1 (%)", max: 50,
        bars: [
          GHOST_27B, GHOST_9B,
          { model: "o4-mini", name: "o4-mini", sub: "", org: "OpenAI", value: 31.0, kind: "base" },
          { model: "Gemini-2.5-Pro", name: "Gemini", sub: "2.5 Pro", org: "Google", value: 29.0, kind: "base" },
          { model: "GPT-4o", name: "GPT-4o", sub: "", org: "OpenAI", value: 26.1, kind: "base" },
          { model: "Claude-Sonnet-4", name: "Claude", sub: "Sonnet 4", org: "Anthropic", value: 21.4, kind: "base" }
        ]
      }
    ],

    safety: [
      {
        cat: "Safety", title: "OSBlind", metric: "Attack Success Rate (%) · ↓ lower is better", max: 100,
        foot: "Real evaluated UI-Venus-2.0 numbers — the only benchmark already finalized.",
        bars: [
          { model: "UI-Venus-2.0-27B", name: "UI-Venus", sub: "2.0 \u00b7 27B", org: "Ant Group", value: 12.3, kind: "ours" },
          { model: "UI-Venus-2.0-9B", name: "UI-Venus", sub: "2.0 \u00b7 9B", org: "Ant Group", value: 18.5, kind: "ours" },
          { model: "Claude-4.5-Sonnet", name: "Claude", sub: "4.5 Sonnet", org: "Anthropic", value: 73.0, kind: "base" },
          { model: "OpenCUA-32B", name: "OpenCUA", sub: "32B", org: "XLANG Lab", value: 91.8, kind: "base" },
          { model: "GPT-4o", name: "GPT-4o", sub: "", org: "OpenAI", value: 93.3, kind: "base" },
          { model: "UI-TARS-1.5-7B", name: "UI-TARS", sub: "1.5 \u00b7 7B", org: "ByteDance", value: 95.2, kind: "base" }
        ]
      }
    ]
  };


  window.VENUS_CHARTS = CHARTS;
  window.VENUS_GHOST_HEIGHT = 34; // visual height (%) of a TBD ghost bar — not a data value
})();
