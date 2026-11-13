---
uid: api.574442f34ae574c5023bbafaa8b42ba44c3282cb719316d522b97fab9e270af1
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.BeginNameScope(System.String)"
source: xml
reviewed: e0e01bb53297d5a95f9941d091904f1c86926b3534a77d52b32b3b459eee2d77
title: "BeginNameScope"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Prefixes pass and resource diagnostic names until the returned scope is disposed.

**Parameter `name`:** Non-empty scope segment.

**Returns:** A disposable name scope that must be closed in nesting order.
