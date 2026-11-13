---
uid: api.69a67dbc964bfe99308ad43a1258b4c730056d047ee2c641e0f986dd03dd2e80
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertiesData(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: eed9bd6e1271dd95b22a8abe090b76e51c6c27f42e89e0ddf8e9db4eb8f73b6a
title: "SerializationRegistry.CapturePropertiesData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Captures every persistent property as neutral bytes without serializing the owning object graph.

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Strictly validated bytes containing independently encoded property values.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
