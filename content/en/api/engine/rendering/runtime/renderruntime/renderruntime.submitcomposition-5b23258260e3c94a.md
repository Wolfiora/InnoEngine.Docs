---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5b23258260e3c94a0b616dcc6dfcb1ada062ae6a33a2d7aeec02093c5610d5fd
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.SubmitComposition(System.String,Inno.Rendering.RenderTarget,Inno.Rendering.RenderViewport,Inno.Rendering.RenderTextureFormat,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderRequest},System.Int32)
title: RenderRuntime.SubmitComposition
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 0019a702705463d669eb78422f35d657c9a41fd8ea84b45b639fb00f759b7ede
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** Stable frame-local composition identity.

**Parameter `target`:** Final host-owned output target.

**Parameter `viewport`:** Output viewport in physical pixels.

**Parameter `format`:** Shared sampled color format required by every layer.

**Parameter `layers`:** Ordered requests, one per rendering model.

**Parameter `priority`:** Ascending scheduling priority relative to ordinary requests.

## Exceptions

**Exception `T:System.ArgumentException`:** The layer set or format is invalid.

**Exception `T:System.InvalidOperationException`:** The bounded frame queue is full or retirement has started.
