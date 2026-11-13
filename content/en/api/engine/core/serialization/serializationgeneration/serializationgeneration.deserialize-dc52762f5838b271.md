---
uid: api.dc52762f5838b271d7fbc85a2a896f841e22d1104d2a6c7aa420d65852410cff
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 81485e7cde765c6dff9e70743844780f3682d1c619128d5dc1b20b00c79aafa1
title: "SerializationGeneration.Deserialize"
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
