---
uid: api.1e9a7cb6b02e202127ba04c2c97f140066b01a291998a49bc89ebca6ecff6e05
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackIndexCodec.Encode(Inno.Content.ContentPackIndex,Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: 4e47a2d4d33f4d74e26170e61e5197ee680a96c724af0189d1220afa7254d92c
title: "Encode"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Captures the entire index with the operation's pinned converter generation.

**Parameter `index`:** The validated immutable inventory.

**Parameter `serialization`:** The borrowed generation shared by the enclosing build transaction.

**Returns:** Newly owned deterministic index bytes.
