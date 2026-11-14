---
uid: api.ef6b885a6b780721febde310815e385d0f2991bcf440ed958e4ed70df5550a4c
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.Write\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: 29061e29f7d3a867e8c7efa12057746b9195f06849754cf417e0e5b39b249ab3
title: "SerializationWriter.Write"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes a named value through the unified value pipeline.

## Type parameters

**Type parameter `TValue`:** The declared value type.

## Parameters

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to write.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `name` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the name is duplicated or the value is unsupported.
