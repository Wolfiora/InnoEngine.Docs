---
uid: api.5d47d90bb8ddf4e449ad88a1a552e86d9587d3886cf7742eac72542778b3e81e
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.ReadAllBytes"
source: xml
reviewed: 57c31662e8407ead6063f54d1e55fae30c3d2971b14ec2fdfffba851d4551b1b
title: "ArtifactLease.ReadAllBytes"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Reads one indexed payload through this lease's independently pinned stream.

## Returns

Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.
