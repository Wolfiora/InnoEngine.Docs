---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.be965eea001e41657d4f0923e19f190ff98301d3427f87869591b75400f3f33a
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertyData(InnoEngine.Serialization.ISerializable,System.String,InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertyData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 39d61c8bbd5bc08671050262d3e997a1e03b6138d45a7e790cd73bfa598edf17
apiScope: Editor
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
