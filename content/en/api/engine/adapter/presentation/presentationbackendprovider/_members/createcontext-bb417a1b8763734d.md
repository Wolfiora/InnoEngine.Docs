---
uid: api.bb417a1b8763734d7fe198604f1518bf1ad1f8d329ed3918a85d88d835374812
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions)"
source: xml
reviewed: 0f8fa8ebce91be8a6f4e4be152cfcc8d5f27edeb5120a8ec3e3fdede2da677ed
title: "CreateContext"
kind: api
owners: [Inno.Adapter.Presentation]
apiSurface: source-clr
---

Creates a new caller-owned presentation context over the supplied host resources.

**Parameter `options`:** Externally owned platform and rendering resources, together with the requested presentation policy.

**Returns:** A new context whose caller must dispose it before releasing the supplied resources. Providers must not return null.

**Exception `T:System.NotSupportedException`:** The host resources or requested features are incompatible with this implementation.
