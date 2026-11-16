---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.625f4eaceb00b056c7ae3c682459233c9be2964407afd7f4f8b0598f6390fe20
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactLease.ReadAllBytes
title: ArtifactLease.ReadAllBytes
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 383170d9e8dfe9b41312f853d2c1b70a239e0020b6ba8255e749af42ad3812f7
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
