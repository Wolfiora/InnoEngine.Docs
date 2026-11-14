---
uid: api.5c565a0de91f48d04708119d64b4efec34e7b55e00d5adbad5440c9d34fc48e7
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: 8dbf89a6b984f67dc068d3fedef0d4787ee05e3266d1dd087344541ccd7874ea
title: "RuntimeManifestEnvelope.Decode"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Deserializes and validates the complete runtime manifest after engine serialization is available.

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

**Parameter `serialization`:** The immutable converter generation selected for Player startup.

## Returns

The validated runtime manifest.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or manifest is malformed, or when the framed identity disagrees with the payload.
