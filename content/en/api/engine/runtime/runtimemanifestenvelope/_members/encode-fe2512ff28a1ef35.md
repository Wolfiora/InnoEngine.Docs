---
uid: api.fe2512ff28a1ef358f7456ce65471965124a50c5cb7deb578ac5dc72ca15d2ae
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.Encode(Inno.Runtime.GameRuntimeManifest,Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: 704e8d35da22a45edb3c1c6e6e5a78deb46931f0acbd573300988f470dea7aad
title: "Encode"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Encodes a validated runtime manifest into the strict deployment envelope.

**Parameter `manifest`:** The manifest whose application identity and serialized payload must agree.

**Parameter `serialization`:** The immutable converter generation captured for the surrounding build transaction.

**Returns:** The complete deterministic deployment envelope.

**Exception `T:System.ArgumentNullException`:** Thrown when `manifest` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the manifest is not valid for Player startup.
