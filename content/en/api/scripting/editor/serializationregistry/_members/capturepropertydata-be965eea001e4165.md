---
uid: api.be965eea001e41657d4f0923e19f190ff98301d3427f87869591b75400f3f33a
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertyData(InnoEngine.Serialization.ISerializable,System.String,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: caefb72b294e22330a0957f2ee06efd00a59aa1df7f9530a348ffefb5e93511e
title: "CapturePropertyData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Captures one persistent property as independently restorable neutral bytes without reading unrelated members.

**Parameter `value`:** The serializable object containing the requested property.

**Parameter `propertyName`:** The exact serialized member key to capture.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Neutral bytes containing the property name and encoded value.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` is empty or does not identify a persistent property.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
