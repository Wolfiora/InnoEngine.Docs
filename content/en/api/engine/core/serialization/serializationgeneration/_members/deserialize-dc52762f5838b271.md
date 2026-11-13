---
uid: api.dc52762f5838b271d7fbc85a2a896f841e22d1104d2a6c7aa420d65852410cff
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: c57ae52f5dc15dccece3dc9b5487ea588f551e8d28633cbc03dfce2b1768e248
title: "Deserialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Deserializes a complete root object using the converter generation captured by this instance.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** Deterministic binary data containing the root object.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** The restored root object.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.
