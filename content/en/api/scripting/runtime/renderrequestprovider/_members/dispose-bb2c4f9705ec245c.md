---
uid: api.bb2c4f9705ec245c05d78cd64f019f91810d4c9d3914e22bf5cabdda484f9fa0
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequestProvider.Dispose"
source: xml
reviewed: c27103218b9be669cb47021b6c884f570d195dedf72952fab3bb0629cbef5996
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases generation-scoped provider state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.
