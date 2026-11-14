---
uid: api.22f57b621abf828385583861c90c00e8ff5c47b37a6293c2df2246cbee70c45f
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Serialize\u0060\u00601(\u0060\u00600,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: cdcb99b092153c903798063ee6456ed425b54c4f71cf899b4aa7bb516fc4fca3
title: "SerializationRegistry.Serialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Serializes a complete serializable root object into deterministic binary data.

## Type parameters

**Type parameter `T`:** The declared concrete root type.

## Parameters

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

## Returns

The encoded bytes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
