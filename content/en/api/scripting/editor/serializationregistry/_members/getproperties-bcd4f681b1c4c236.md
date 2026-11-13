---
uid: api.bcd4f681b1c4c23668d2491e068a1ba14fa5fc5ffbab9fd79f2ab130a6d9d90e
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.GetProperties(InnoEngine.Serialization.ISerializable)"
source: xml
reviewed: 00ee8cc8443526afee7502053bd792858e38d1c7e6c5b3542a69dcc6de1320ef
title: "GetProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Gets the stable ordered runtime-visible properties for a serializable object.

**Parameter `value`:** The object whose property metadata should be created.

**Returns:** The properties that permit runtime reads.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
