---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.625f4eaceb00b056c7ae3c682459233c9be2964407afd7f4f8b0598f6390fe20
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactLease.ReadAllBytes
title: ArtifactLease.ReadAllBytes
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: ebb4875796ba2b8b570060d22e6f5cf6a0c413a3b299a79728b1c6ce1e59013c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.
