---
uid: api.7bd59e995b34215accce379a0cbc168fb35695d6426b99d4cf50a0d892db7c08
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: e745e2e58cbdaf08886c40d1fc58f59cbc3e1c6089c115d58fa3337609c6c157
title: "RuntimeManifestEnvelope.ReadApplicationId"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Reads and validates the application identity without requiring serialization services to be initialized.

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

## Returns

The stable application identity declared by the Player build.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope is truncated, malformed, or contains an invalid application identity.
