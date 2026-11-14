---
uid: api.5c8cb9a172756244f4c763ca76b27aa6c6a0b17d9bd8e41bfdb7aa908291ceac
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationReader.Read\u0060\u00601(System.String)"
source: xml
reviewed: 206ae517f27277ca578efc1f2a8970262e9f571386fb9ea0789b26185c44b64e
title: "SerializationReader.Read"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Reads a required named value through the unified value pipeline.

## Type parameters

**Type parameter `TValue`:** The declared value type.

## Parameters

**Parameter `name`:** The required member name.

## Returns

The restored value.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the member is missing or invalid.
