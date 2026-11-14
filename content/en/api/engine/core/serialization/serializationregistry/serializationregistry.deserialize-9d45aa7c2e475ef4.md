---
uid: api.9d45aa7c2e475ef44131fdd6f7918517afd6e7911d9b1ddde88c489054164578
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: c87d2fe941e9968676e9db78f99018e0e0ac2aad7a3a42c28283a01b44161e5a
title: "SerializationRegistry.Deserialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Deserializes a new serializable root object from deterministic binary data.

## Type parameters

**Type parameter `T`:** The concrete root type to create.

## Parameters

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Returns

The restored object.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
