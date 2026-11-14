---
uid: api.bca3343dbf1072272a50b9f663bd3e1a8e1ed4b2f34ad6369528df65c2c27af0
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackIndexCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationGeneration)"
source: xml
reviewed: 40e7604de8ae2495fc49fc79a25fbb48540562d483a06e7058cec0604208bf08
title: "ContentPackIndexCodec.Decode"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Restores and validates one current-format payload inventory.

**Parameter `data`:** The complete structured index bytes.

**Parameter `serialization`:** The borrowed converter generation pinned by the enclosing preparation operation.

**Returns:** A newly owned immutable inventory with no duplicate or ambiguous identities.

**Exception `T:System.IO.InvalidDataException`:** The bytes or inventory are malformed; no partial index is returned.
