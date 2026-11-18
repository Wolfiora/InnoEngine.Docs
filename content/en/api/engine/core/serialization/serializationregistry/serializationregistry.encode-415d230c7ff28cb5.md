---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.415d230c7ff28cb58493796bece6cbf1461d45f0329dbec6fde3bd5edabf980f
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Encode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 87b2ed86a43fdb48175122a5d10cf6a16591a9a2d3fe8990510a76ff68875689
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

## Returns

The encoded bytes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
