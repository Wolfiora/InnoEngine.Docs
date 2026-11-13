---
uid: api.d0474b0bdf2e4347e2943d10b1908d4b580c4fa1fa17ce74b972db1b3a0a3fee
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Decode\u0060\u00601(System.ReadOnlySpan{System.Byte},System.Func{InnoEngine.Serialization.SerializationReader,\u0060\u00600},InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: aca728b50da3d6898712e58eafe9f010bfb6b6264baacfb8bbd3051d4a701804
title: "Decode"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Decodes a manually defined structured schema from deterministic binary data.

**Type parameter `TResult`:** The result produced by the read callback.

**Parameter `bytes`:** The encoded bytes.

**Parameter `read`:** The callback that reads the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The callback result after all completion callbacks succeed.

**Exception `T:System.ArgumentNullException`:** Thrown when `read` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
