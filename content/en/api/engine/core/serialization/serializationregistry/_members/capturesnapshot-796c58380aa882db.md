---
uid: api.796c58380aa882dbe117836b3ad630a63b70192a56813cfa7d807a3da0ac74c1
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot\u0060\u00601(\u0060\u00600,Inno.Core.Serialization.SerializationContext,Inno.Core.Serialization.SerializationSnapshot)"
source: xml
reviewed: 7b040ca8f85b199c1ebbea779cd525c70506f3dc1b1a445f3cede55661f93207
title: "CaptureSnapshot"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures complete serialized state while sharing unchanged neutral values with a previous capture.

**Type parameter `T`:** The exact concrete root type, interpreted by the current converter generation.

**Parameter `value`:** The non-null root captured through its current converter and declared complete inputs.

**Parameter `context`:** The complete owner context, including required reference resolvers.

**Parameter `previous`:** An optional immutable capture to reuse; it is never changed or retained by this registry.

**Returns:** The previous instance when all captured values can be reused, otherwise a new immutable snapshot. Reference equality proves unchanged bytes; different instances may still encode identically. Ordinary serialization and snapshot encoding produce identical bytes. Capture failure publishes no snapshot.

## Remarks

Writers borrowed by a snapshot converter belong to its synchronous callback and must not be used after it returns. Default capture evaluates getters and converters in full. An explicitly opted-in converter may reuse its prior node only after every current capture-key input has been verified. Ordinary serialization never uses these keys; incomplete or unavailable declarations retain complete capture.

**Exception `T:System.ArgumentNullException`:** The source value is null.

**Exception `T:System.ObjectDisposedException`:** The registry has been disposed.

**Exception `T:System.InvalidOperationException`:** A converter, unsupported value or reference context prevents capture.
