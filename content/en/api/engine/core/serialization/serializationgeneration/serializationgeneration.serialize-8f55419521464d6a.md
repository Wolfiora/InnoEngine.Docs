---
uid: api.8f55419521464d6a1975341e40c8707b4d14da95e52d4e29c52b4332fc5fc925
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Serialize\u0060\u00601(\u0060\u00600,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: bd20d19a5455cf4eeb2489a312603b1c84bfb9e3a2cb2a3b3fd90274da5ef216
title: "SerializationGeneration.Serialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Serializes a complete root object using the converter generation captured by this instance.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The non-null root object to encode.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** Deterministic binary data encoded by the captured converter generation.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.
