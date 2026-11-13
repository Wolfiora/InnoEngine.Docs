---
uid: api.8675e8aef5bd38f890ec37a45d3ab7d95217cce45f6947c04229250017aa27ee
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CapturePropertyData(Inno.Core.Serialization.ISerializable,System.String,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: b50281fed376ed1baec419a1be9c6a47d421890c7cf889f909a994becd2805d5
title: "CapturePropertyData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures one persistent property as independently restorable neutral bytes without reading unrelated members.

**Parameter `value`:** The serializable object containing the requested property.

**Parameter `propertyName`:** The exact serialized member key to capture.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Neutral bytes containing the property name and encoded value.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` is empty or does not identify a persistent property.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
