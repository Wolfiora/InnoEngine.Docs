---
uid: api.9bd4abeee9e2d958d0eb8083f1f9035f3983603521096d58edee38008e048d46
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Serialize\u0060\u00601(\u0060\u00600,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: e5353704b8324726f3374b314c447d53809a3fcb3baf9c4d0606b9b141543b12
title: "Serialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Serializes a complete serializable root object into deterministic binary data.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
