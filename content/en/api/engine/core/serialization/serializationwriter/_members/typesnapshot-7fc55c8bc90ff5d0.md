---
uid: api.7fc55c8bc90ff5d01c9e579800246d7f57cf92ff6f3fe2b9480c553473feb12f
symbol: "engine:Inno.Core.Serialization:P:Inno.Core.Serialization.SerializationWriter.typeSnapshot"
source: xml
reviewed: 5a9e050d81b79f7e3dd09cfd0e9d8b9c578bf1a8124d678dd7c988be3b069383
title: "typeSnapshot"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Borrows the immutable type snapshot pinned by this operation's converter generation.

## Remarks

Use this snapshot for consistent type identities during a complete capture. It must not be retained beyond the writer's operation; keeping it would retain its collectible types after the converter lease is released.

**Exception `T:System.InvalidOperationException`:** The writer no longer belongs to an active capture.
