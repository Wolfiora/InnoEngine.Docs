---
uid: api.d30caa878d9a57c1aca41f22c037504eac78edc2cb15a05194d1badafcf278d0
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: b873eea57b8354e5b6a4084b03b2fc48356a8e65cc239670ad63dbefe2bc7e46
title: "SerializationRegistry.CaptureProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures each persistent property independently for reload-safe state restoration.

## Parameters

**Parameter `value`:** The object whose serializable properties should be captured.

**Parameter `context`:** Optional immutable converter context.

## Returns

Ordered independent property snapshots.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
