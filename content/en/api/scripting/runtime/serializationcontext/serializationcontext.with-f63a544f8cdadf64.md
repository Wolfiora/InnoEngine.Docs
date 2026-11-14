---
uid: api.f63a544f8cdadf641ec4830114d1910ba3e45b5082fceadc5dd194d8b4cb2518
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationContext.With\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: b6d06f4ca86a262725b7914cb0cdffc1b2935571609faf60fc9e7327ac3b0cfb
title: "SerializationContext.With"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Returns a new context containing the supplied value under its declared context type.

## Type parameters

**Type parameter `TContext`:** The exact context contract type.

## Parameters

**Parameter `value`:** The context value to register.

## Returns

A new context containing the registered value.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is null.
