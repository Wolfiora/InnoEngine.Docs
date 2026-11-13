---
uid: api.415d230c7ff28cb58493796bece6cbf1461d45f0329dbec6fde3bd5edabf980f
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 832c35ee0d6afc535cf4caaf2c1ecaa5d42ef8d462b7686dc782ba80074ccb09
title: "Encode"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Encodes a manually defined structured schema into deterministic binary data.

**Parameter `write`:** The callback that writes the root object.

**Parameter `context`:** Optional immutable converter context.

**Returns:** The encoded bytes.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
