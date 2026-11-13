---
uid: api.18a040e11d521fb951ec0e0f723848b190d7fa72bb07e2840ec01e87759e39f4
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.RestoreProperties(Inno.Core.Serialization.ISerializable,System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationPropertySnapshot},Inno.Core.Serialization.SerializationPropertyRestoreMode,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 9b58ec8066f7a0da7ec18609d7ea313f1dadd74b8b0b03979acc15d1757e3303
title: "RestoreProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Restores independently captured properties into an existing object.

**Parameter `target`:** The object receiving compatible property values.

**Parameter `snapshots`:** The previously captured property snapshots.

**Parameter `mode`:** The failure policy for matching but incompatible properties.

**Parameter `context`:** Optional immutable converter context.

**Returns:** A summary containing restored, ignored, and skipped properties.

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is unknown.

**Exception `T:System.InvalidOperationException`:** Thrown when strict restoration or an object-level callback fails.
