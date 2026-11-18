---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.625f4eaceb00b056c7ae3c682459233c9be2964407afd7f4f8b0598f6390fe20
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactLease.ReadAllBytes
title: ArtifactLease.ReadAllBytes
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 3327988e78a0bd7d795a4326fba76efa66901071f26e9fb9888f4637aa6f7195
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
