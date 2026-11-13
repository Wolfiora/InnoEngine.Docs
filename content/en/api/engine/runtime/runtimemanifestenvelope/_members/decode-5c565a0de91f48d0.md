---
uid: api.5c565a0de91f48d04708119d64b4efec34e7b55e00d5adbad5440c9d34fc48e7
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: d26d5b778c4499ccc3de8c85b739ffb2b285bf8fafa15e85908850466aaafcc2
title: "Decode"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Deserializes and validates the complete runtime manifest after engine serialization is available.

**Parameter `data`:** The complete runtime manifest envelope.

**Parameter `serialization`:** The immutable converter generation selected for Player startup.

**Returns:** The validated runtime manifest.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope or manifest is malformed, or when the framed identity disagrees with the payload.
