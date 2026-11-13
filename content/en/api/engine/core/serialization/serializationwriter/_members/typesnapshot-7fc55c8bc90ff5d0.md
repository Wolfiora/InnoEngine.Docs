---
uid: api.7fc55c8bc90ff5d01c9e579800246d7f57cf92ff6f3fe2b9480c553473feb12f
symbol: "engine:Inno.Core.Serialization:P:Inno.Core.Serialization.SerializationWriter.typeSnapshot"
source: xml
reviewed: 7d487b71c211d8e5b44646bc6e8a0386c7df3c669f0ffa8c3744fa58790861e1
title: "typeSnapshot"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Borrows the immutable type snapshot pinned by this operation's converter generation.

## Remarks

Use this snapshot for consistent type identities during a complete capture. It must not be retained beyond the writer's operation; keeping it would retain its collectible types after the converter lease is released.

**Exception `T:System.InvalidOperationException`:** The writer no longer belongs to an active capture.
