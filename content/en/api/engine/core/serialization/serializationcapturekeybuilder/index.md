---
uid: api.inno.core.serialization.6f07b7634363d447
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationCaptureKeyBuilder"
source: xml
reviewed: fb99fd2aa83a97251c4b123bd83bf773786d523827b3e181bf3fec89ce8c7767
title: "SerializationCaptureKeyBuilder"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Builds an exact neutral key during one owned synchronous converter capture callback.

## Remarks

Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.
