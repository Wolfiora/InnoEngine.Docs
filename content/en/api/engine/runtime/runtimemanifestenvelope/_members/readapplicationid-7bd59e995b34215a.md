---
uid: api.7bd59e995b34215accce379a0cbc168fb35695d6426b99d4cf50a0d892db7c08
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: ea2589b240b52f7f165f344234ebb0391f925ec35a01ea55f4d1ccecd1a6a59b
title: "ReadApplicationId"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Reads and validates the application identity without requiring serialization services to be initialized.

**Parameter `data`:** The complete runtime manifest envelope.

**Returns:** The stable application identity declared by the Player build.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope is truncated, malformed, or contains an invalid application identity.
