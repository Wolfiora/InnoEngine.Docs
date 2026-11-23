---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5275e7cc582a6469b923ac3d8db174f4d9dee413de04e32700f94247970cfd5b
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationID(System.ReadOnlySpan{System.Byte})
title: RuntimeManifestEnvelope.ReadApplicationID
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: d8bf5cf1e0945c230d646ebfa30b1269e7d8ec9256c4264cf628add54a887ccd
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
