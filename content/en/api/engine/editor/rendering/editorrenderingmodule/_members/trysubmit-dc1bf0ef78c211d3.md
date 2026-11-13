---
uid: api.dc1bf0ef78c211d3bcc24e662adbc824fbf8dbc4138d71c81fc70efa7d1c43af
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TrySubmit(Inno.Editor.Rendering.EditorViewportKindId,System.String,System.Int32,System.Int32,Inno.Editor.Rendering.EditorViewportOutput@)"
source: xml
reviewed: 7f897bd188a05aff394379eeaac57bb207b7547b9c60f17c50e9162f0145f912
title: "TrySubmit"
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
