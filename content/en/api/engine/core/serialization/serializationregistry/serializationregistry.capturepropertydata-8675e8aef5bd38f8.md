---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8675e8aef5bd38f890ec37a45d3ab7d95217cce45f6947c04229250017aa27ee
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable,System.String,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertyData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 5bd82cb3adb5becd3baa5a3190882fa044330d687f668af4b98b1c349586821e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The serializable object containing the requested property.

**Parameter `propertyName`:** The exact serialized member key to capture.

**Parameter `context`:** Optional immutable converter context.

## Returns

Neutral bytes containing the property name and encoded value.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` is empty or does not identify a persistent property.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
