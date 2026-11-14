---
uid: api.0c2cada30964f4e9c35939458d8fc3a45b8822c9d1f56a85dabc55863a47a820
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 451943d76bcf51c457d7a7b881b65417ab3cd9b348420d92f23bff5f2535c674
title: "Assets.AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over verified artifact metadata and bytes.
