---
uid: api.dc1bf0ef78c211d3bcc24e662adbc824fbf8dbc4138d71c81fc70efa7d1c43af
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TrySubmit(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportOutput@)"
source: xml
reviewed: 79df982d19113b61d8ba5a18c0faaea58913153dfc0b7c1f490834567a96e99e
title: "EditorRenderingModule.TrySubmit"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Builds, composes, submits, and returns one host-owned offscreen viewport.

**Parameter `kind`:** Open viewport purpose.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.

**Parameter `output`:** Receives the opaque viewport output.

**Returns:** `true` when at least one model contribution was accepted.
