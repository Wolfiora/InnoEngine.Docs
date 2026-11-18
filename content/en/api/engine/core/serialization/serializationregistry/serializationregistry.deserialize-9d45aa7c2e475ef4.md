---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9d45aa7c2e475ef44131fdd6f7918517afd6e7911d9b1ddde88c489054164578
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Deserialize``1(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Deserialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: ab96fbadd7489cdad34fc3bd6b384a728e73e77af9086f042e0051395e4fd79f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The concrete root type to create.

## Parameters

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

## Returns

The restored object.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
