---
uid: api.9fce1ee64a41b75f1de9ebc9163ee6580c8d36d1e5e86cb7007e564e64212abc
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationTypeMetadata.WithCaptureRevision(System.Func{System.Object,System.Nullable{System.UInt64}})"
source: xml
reviewed: 55feeea5d9851b9572eb4e604a0fff420e821af2a9133871952e379d7faf7435
title: "WithCaptureRevision"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Declares complete pure serialized-property revision access for a sealed serializable identity source.

**Parameter `readRevision`:** The owner-controlled revision reader; null results decline reuse and counters must not repeat for different state.

**Returns:** An immutable declaration; snapshots never retain this reader or metadata.

**Exception `T:System.ArgumentNullException`:** The revision reader is null.

**Exception `T:System.InvalidOperationException`:** The declaration is not a sealed identity reference type.
