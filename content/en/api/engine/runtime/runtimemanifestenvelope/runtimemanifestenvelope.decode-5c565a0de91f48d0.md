---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5c565a0de91f48d04708119d64b4efec34e7b55e00d5adbad5440c9d34fc48e7
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration)
title: RuntimeManifestEnvelope.Decode
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: aa73965fcb30378ae0621b19338f050a596951e28e51c65595a8b22ccb7d9ba2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

**Parameter `serialization`:** The immutable converter generation selected for Player startup.

## Returns

The validated runtime manifest.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or manifest is malformed, or when the framed identity disagrees with the payload.
