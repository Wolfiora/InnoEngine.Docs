---
uid: api.5f753f1b4f6e3dd59c23ee94f82bf030f3aa19d29716ed778f4e8924112b02d1
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPanelExtension.Draw(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: bc20ab5c02db0639675f0a00c25d1fe70fd979f1add02e1abcf856ff8031df75
title: "Draw"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Safely draws the panel body and quarantines a failing extension instance.

**Parameter `context`:** The active editor context supplied by the presentation backend.

**Returns:** `true` when the panel completed drawing without being quarantined.

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
