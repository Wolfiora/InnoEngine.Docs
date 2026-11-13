---
uid: api.5158890284ecae017a569709f4555133309f7868efcb544fa3de87d4c3c4e3d8
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Encode(System.Action{Inno.Core.Serialization.SerializationWriter},Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: ec732601ce9f711ebd38cd84a7fadfd53de7577cae5cd9a8d8b81016f04dd12e
title: "SerializationGeneration.Encode"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Encodes a manually defined structured root using the converter generation captured by this instance.

**Parameter `write`:** The callback that writes the complete root object.

**Parameter `context`:** Optional immutable converter context for this operation.

**Returns:** Deterministic binary data containing the structured root.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.
