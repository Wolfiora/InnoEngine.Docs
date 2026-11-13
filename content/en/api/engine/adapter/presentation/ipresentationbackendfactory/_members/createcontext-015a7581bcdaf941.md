---
uid: api.015a7581bcdaf94131aec5ac731550b1c982f69239f01e96822ae1a9745c7186
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions)"
source: xml
reviewed: f43e6c1160037e1014afa63b6cda9d2bb01be620be309c0eb467d9bd2edb7b56
title: "CreateContext"
kind: api
owners: [Inno.Adapter.Presentation]
apiSurface: source-clr
---

Creates a presentation context over compatible platform and rendering adapters.

**Parameter `backend`:** Stable presentation implementation selected by the composition root.

**Parameter `options`:** Host-owned resources and presentation policy.

**Returns:** A caller-owned backend-neutral presentation context.

**Exception `T:System.NotSupportedException`:** Thrown when the selected platform, rendering, and presentation backends are incompatible.
