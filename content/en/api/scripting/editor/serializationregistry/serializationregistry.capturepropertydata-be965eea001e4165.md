---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.be965eea001e41657d4f0923e19f190ff98301d3427f87869591b75400f3f33a
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertyData(InnoEngine.Serialization.ISerializable,System.String,InnoEngine.Serialization.SerializationContext)
title: SerializationRegistry.CapturePropertyData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 29d72f1e7af842cfd9962b676b48f2dd392642ed3f3593f426311ad6863f922d
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
