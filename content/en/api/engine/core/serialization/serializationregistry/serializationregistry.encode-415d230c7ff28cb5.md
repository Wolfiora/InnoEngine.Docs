---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.415d230c7ff28cb58493796bece6cbf1461d45f0329dbec6fde3bd5edabf980f
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.Encode
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 2460fb3ccc4e6a8bb91a1393286b7fe74b9ffb3082c9aa7d38eccc3b753b3d23
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
