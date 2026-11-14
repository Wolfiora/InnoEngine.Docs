---
uid: api.9bd4abeee9e2d958d0eb8083f1f9035f3983603521096d58edee38008e048d46
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationRegistry.Serialize\u0060\u00601(\u0060\u00600,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 655d7dec7d8b774dc9d038b421b1288ee88607eb50a954928439b1cd94dc08b2
title: "SerializationRegistry.Serialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Editor
---

Serializes a complete serializable root object into deterministic binary data.

## Type parameters

**Type parameter `T`:** The declared concrete root type.

## Parameters

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

## Returns

The encoded bytes.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
