---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.926a277f9e6b3df59ac18143b0f57c74391b2de9a0dc5fa7164764bf061ae76d
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.RestorePropertiesData(Inno.Core.Serialization.ISerializable,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.RestorePropertiesData
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: abbf8e38cca4edde49a2f31da18a28e649421f03c095fda0b2cad7dddd116470
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The existing object receiving the captured values.

**Parameter `data`:** Strict property snapshot bytes created by `M:Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable,System.String,Inno.Core.Serialization.SerializationContext)` or `M:Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)`.

**Parameter `mode`:** The failure policy for matching but incompatible current properties.

**Parameter `context`:** Optional immutable converter context.

## Returns

A summary containing restored, ignored, and skipped properties.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is unknown.

**Exception `T:System.IO.InvalidDataException`:** Thrown when `data` is malformed or unsupported.

**Exception `T:System.InvalidOperationException`:** Thrown when strict restoration or an object-level callback fails.
