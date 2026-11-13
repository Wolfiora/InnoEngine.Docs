---
uid: api.b6befb8660e2f1a46820ba5b9a26b1c83396e3b5205d15b0de5a47295ae996cf
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: cf376db804a615dfe791a633c035fabbe08e8094e1990f093d263af13940cd88
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
