---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.22f57b621abf828385583861c90c00e8ff5c47b37a6293c2df2246cbee70c45f
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Serialize``1(``0,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Serialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 2c8872d9ec706b6d760729c11be63beb774d6ae6b7598495c013b83ced9507ba
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
