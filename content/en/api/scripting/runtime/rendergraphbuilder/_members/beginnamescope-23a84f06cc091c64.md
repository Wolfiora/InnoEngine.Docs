---
uid: api.23a84f06cc091c64d0ad50b0bbe1a8a44fb0fcd77455ee407fc8f1da26bb50e3
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.BeginNameScope(System.String)"
source: xml
reviewed: 71df3b2399503b28af49d9782a1c3e416f7a72d56c499fb7e411bdfa92ab15ae
title: "BeginNameScope"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Prefixes pass and resource diagnostic names until the returned scope is disposed.

**Parameter `name`:** Non-empty scope segment.

**Returns:** A disposable name scope that must be closed in nesting order.
