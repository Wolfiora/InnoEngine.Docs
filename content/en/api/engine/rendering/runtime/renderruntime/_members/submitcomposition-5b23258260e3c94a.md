---
uid: api.5b23258260e3c94a0b616dcc6dfcb1ada062ae6a33a2d7aeec02093c5610d5fd
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.SubmitComposition(System.String,Inno.Rendering.RenderTarget,Inno.Rendering.RenderViewport,Inno.Rendering.RenderTextureFormat,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderRequest},System.Int32)"
source: xml
reviewed: f6931b38995dfb2abdfb2a63c975f4082c2484d05a2c88b323f83303edbe07b6
title: "SubmitComposition"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Submits one or more independently rendered model layers for premultiplied-alpha output composition.

**Parameter `name`:** Stable frame-local composition identity.

**Parameter `target`:** Final host-owned output target.

**Parameter `viewport`:** Output viewport in physical pixels.

**Parameter `format`:** Shared sampled color format required by every layer.

**Parameter `layers`:** Ordered requests, one per rendering model.

**Parameter `priority`:** Ascending scheduling priority relative to ordinary requests.

**Exception `T:System.ArgumentException`:** The layer set or format is invalid.

**Exception `T:System.InvalidOperationException`:** The bounded frame queue is full or retirement has started.
