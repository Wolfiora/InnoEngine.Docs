---
uid: api.e821055c68371a34c297a68e8149fd8cf4be9694393d923a3f9504a3dfd27990
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 23755d40e70365a61571a1665ae7ebc8101d0eb22a956c8063fb2948013a14c0
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over the verified deployed artifact.
