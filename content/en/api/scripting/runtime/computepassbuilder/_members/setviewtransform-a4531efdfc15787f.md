---
uid: api.a4531efdfc15787ffd8a36b93954424628fa789eaef95d73582e9a38305e00ba
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.ComputePassBuilder.SetViewTransform(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single})"
source: xml
reviewed: 7fad760b45a1e17d079a476cf85167abc58a66599b17bfbef7c945228dd0c39a
title: "SetViewTransform"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Sets backend-ready column-major transform matrices exposed to this compute view.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.

**Returns:** This builder for fluent declarations.
