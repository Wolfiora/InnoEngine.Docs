---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5d47d90bb8ddf4e449ad88a1a552e86d9587d3886cf7742eac72542778b3e81e
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.ReadAllBytes
title: ArtifactLease.ReadAllBytes
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: b0d8c06ec0d2834f8f3a148942a103c0d5d1a8750369c4ab732be479edd5887d
apiScope: Runtime
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
