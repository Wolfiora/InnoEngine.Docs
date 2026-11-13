---
uid: api.d30caa878d9a57c1aca41f22c037504eac78edc2cb15a05194d1badafcf278d0
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureProperties(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: a3af594f191b1d56f44063016fc24ba29ab887c9751451bbd5723c6eafd9d059
title: "CaptureProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures each persistent property independently for reload-safe state restoration.

**Parameter `value`:** The object whose serializable properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Ordered independent property snapshots.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
