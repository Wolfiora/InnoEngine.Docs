---
uid: api.b6befb8660e2f1a46820ba5b9a26b1c83396e3b5205d15b0de5a47295ae996cf
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 719ca871ed7c74f2ca5b63cc83ccd5247f8192b79a6ea130aac1e50862cd4ada
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires one verified immutable artifact output.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease that keeps the artifact generation available to the caller.

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact does not exist or fails verification.
