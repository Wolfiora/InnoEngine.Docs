---
uid: api.c05c7c99142c8ad6fa517b283cab76e1e8f3cb7431e49f19040883be00a315e2
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 0365c69cdfd776ae5d0e8e366144392fedcb0a7307d298be595d9d1c0aeb0a58
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Acquires an immutable dependency output and records its invalidation dependency automatically.

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

**Returns:** A caller-owned lease that must be disposed after reading.
