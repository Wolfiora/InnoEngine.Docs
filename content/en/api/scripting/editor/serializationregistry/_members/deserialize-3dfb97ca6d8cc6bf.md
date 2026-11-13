---
uid: api.3dfb97ca6d8cc6bf6c8356132da5ab258e860b8c574a45d935408e4906cb66ab
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte},InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 48692f9ed6234e4fe38378c36db1d3f605dd43bb611e90446028aa15c2f39e7c
title: "Deserialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Deserializes a new serializable root object from deterministic binary data.

**Type parameter `T`:** The concrete root type to create.

**Parameter `bytes`:** The encoded bytes.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The restored object.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
