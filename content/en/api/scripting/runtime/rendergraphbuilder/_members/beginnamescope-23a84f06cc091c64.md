---
uid: api.23a84f06cc091c64d0ad50b0bbe1a8a44fb0fcd77455ee407fc8f1da26bb50e3
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.BeginNameScope(System.String)"
source: xml
reviewed: ffb8c2160233c39145ba68ccad9e24269563f79fd7e403e48e4c3bd2e1d8fa40
title: "BeginNameScope"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Prefixes pass and resource diagnostic names until the returned scope is disposed.

**Parameter `name`:** Non-empty scope segment.

**Returns:** A disposable name scope that must be closed in nesting order.
