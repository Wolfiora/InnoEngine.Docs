---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5d47d90bb8ddf4e449ad88a1a552e86d9587d3886cf7742eac72542778b3e81e
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.ReadAllBytes
title: ArtifactLease.ReadAllBytes
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: c3dd82d66eaf30d9589501ae3c2fd20a466ab789bae7d70957c671cac320f752
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
