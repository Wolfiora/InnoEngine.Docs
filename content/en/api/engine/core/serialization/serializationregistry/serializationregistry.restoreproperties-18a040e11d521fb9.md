---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.18a040e11d521fb951ec0e0f723848b190d7fa72bb07e2840ec01e87759e39f4
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.RestoreProperties(Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationPropertySnapshot},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.RestoreProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 7d55d2c5f808305791f4b09c38f57fe5fb000d5ad8aaec9ee94bdf0f818da92a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The object receiving compatible property values.

**Parameter `snapshots`:** The previously captured property snapshots.

**Parameter `mode`:** The failure policy for matching but incompatible properties.

**Parameter `context`:** Optional immutable converter context.

## Returns

A summary containing restored, ignored, and skipped properties.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is unknown.

**Exception `T:System.InvalidOperationException`:** Thrown when strict restoration or an object-level callback fails.
