---
uid: api.bb2c4f9705ec245c05d78cd64f019f91810d4c9d3914e22bf5cabdda484f9fa0
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequestProvider.Dispose"
source: xml
reviewed: e5366a397a7bb6b27775faaaf3c670901890e7990a51517237be58b6e486c8f7
title: "RenderRequestProvider.Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases generation-scoped provider state.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.
