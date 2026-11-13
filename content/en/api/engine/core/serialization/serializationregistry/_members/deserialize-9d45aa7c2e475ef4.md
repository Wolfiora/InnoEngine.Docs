---
uid: api.9d45aa7c2e475ef44131fdd6f7918517afd6e7911d9b1ddde88c489054164578
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: e26a9e4c303dd92b128457ee41736b68cef0824e16e97f4b28ea44d9b575c035
title: "Deserialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Deserializes a new serializable root object from deterministic binary data.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The restored object.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
