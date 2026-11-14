---
uid: api.c7d3b5b4bda3742c09065382e125d853f8a02cfd1fef60e2aed57a74b5a2e300
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: 004f7c7a444405fb9b4594ca1ea0f763b7b34cc075fbeb5790e7897e93b22687
title: "SerializationWriter.Write"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
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
