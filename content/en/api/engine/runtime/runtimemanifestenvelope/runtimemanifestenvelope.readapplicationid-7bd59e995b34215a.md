---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7bd59e995b34215accce379a0cbc168fb35695d6426b99d4cf50a0d892db7c08
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan{System.Byte})
title: RuntimeManifestEnvelope.ReadApplicationId
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: a894cbba9f6a502f9aa861f1d1d43bf32c173e2564c639f51716c387a6b14612
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

## Returns

The stable application identity declared by the Player build.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope is truncated, malformed, or contains an invalid application identity.
