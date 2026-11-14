---
uid: api.d39c0e69bfe20294f45931f17e5ddb9a148479afdc1cbe06d509c9b3e8a62384
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationContext.With\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 1adac4f8dacf6e558d692c1bb791784affd5006d803a0d065705385cf7faff82
title: "SerializationContext.With"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
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
