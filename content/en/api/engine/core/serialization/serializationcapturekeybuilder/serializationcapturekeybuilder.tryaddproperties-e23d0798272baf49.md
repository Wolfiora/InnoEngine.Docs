---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e23d0798272baf49102211a4ff2ab5f0db16da39ad1dca4de7ea425a9f9f89c6
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(Inno.Core.Serialization.ISerializable)
title: SerializationCaptureKeyBuilder.TryAddProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 2ea2c2f708037552542faea14054d802296fac63128290209093a0e695b94042
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The current serializable identity object.

## Returns

True for certified property state; false invalidates the complete key and requires normal capture.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.
