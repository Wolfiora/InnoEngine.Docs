---
uid: api.fb3cb2f1f9e35fc61ef7ecfc270881c4c757569c5634368ae24cd20b5a0dbfaa
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Encode(System.Action{InnoEngine.Serialization.SerializationWriter},InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 7f166f97ede18b545a56e327a6859b667565b995aa399cf612922d50d5031497
title: "Encode"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Encodes a manually defined structured schema into deterministic binary data.

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
