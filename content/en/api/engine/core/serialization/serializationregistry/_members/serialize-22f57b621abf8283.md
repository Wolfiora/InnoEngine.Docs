---
uid: api.22f57b621abf828385583861c90c00e8ff5c47b37a6293c2df2246cbee70c45f
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Serialize\u0060\u00601(\u0060\u00600,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: f7d98c05e4ddd70b3072aa0a0d48fb8d13706e582bef0c5828457af7341b29e1
title: "Serialize"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Serializes a complete serializable root object into deterministic binary data.

**Type parameter `T`:** The declared concrete root type.

**Parameter `value`:** The root object to serialize.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
