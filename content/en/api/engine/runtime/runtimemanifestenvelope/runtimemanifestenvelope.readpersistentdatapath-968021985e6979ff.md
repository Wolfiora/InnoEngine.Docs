---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.968021985e6979ffad1f73e1d568b3663ebc96a9374b3e055ae3242ea3e0a9ad
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadPersistentDataPath(System.ReadOnlySpan{System.Byte})
title: RuntimeManifestEnvelope.ReadPersistentDataPath
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: ee60352570faf36d2a0acff8192e2100bc52f64b3e4c14c290573a45560b33bb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

## Returns

A portable folder path relative to the operating system's local application data directory.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or persistent data path is malformed.
