---
uid: api.0c2cada30964f4e9c35939458d8fc3a45b8822c9d1f56a85dabc55863a47a820
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 73d27f4753e32200f475be1a18a6855a74c594b95e299042c6514a49da35bf01
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires one verified immutable artifact output for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over verified artifact metadata and bytes.
