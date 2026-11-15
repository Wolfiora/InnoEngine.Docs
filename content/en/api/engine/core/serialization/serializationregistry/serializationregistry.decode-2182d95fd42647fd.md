---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2182d95fd42647fdb9fe112913a03fe0a97dacd5128d78ef0bc91db0551719a1
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{Inno.Core.Serialization.SerializationReader,``0},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Decode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 873975812b6331bc2c555aede205ef1b0bcebcf07cc2fad2bc9b66feaf448132

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Decodes a manually defined structured schema from deterministic binary data.

## Type parameters

**Type parameter `TResult`:** The result produced by the read callback.

## Parameters

**Parameter `bytes`:** The encoded bytes.

**Parameter `read`:** The callback that reads the root object.

**Parameter `context`:** Optional immutable converter context.

## Returns

The callback result after all completion callbacks succeed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `read` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
