---
uid: api.69a67dbc964bfe99308ad43a1258b4c730056d047ee2c641e0f986dd03dd2e80
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.CapturePropertiesData(InnoEngine.Serialization.ISerializable,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 813b0311125acacbbe5df3476ee4ebe7dd1efe4fb3e71b95e998e7678284a48c
title: "CapturePropertiesData"
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
