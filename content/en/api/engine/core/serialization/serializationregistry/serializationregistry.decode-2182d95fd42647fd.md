---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2182d95fd42647fdb9fe112913a03fe0a97dacd5128d78ef0bc91db0551719a1
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Decode``1(System.ReadOnlySpan{System.Byte},System.Func{Inno.Core.Serialization.SerializationReader,``0},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Decode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 3dd52a960ac4bb15878c3c0b995529450968a9911b4ae2c9b154b1655547cb11
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
