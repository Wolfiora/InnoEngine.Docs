---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d30caa878d9a57c1aca41f22c037504eac78edc2cb15a05194d1badafcf278d0
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)
title: SerializationRegistry.CaptureProperties
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 750ff4e97f4b33656da4e48897623132ebce144c8b52534d48b92aa60605279f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The object whose serializable properties should be captured.

**Parameter `context`:** Optional immutable converter context.

## Returns

Ordered independent property snapshots.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
