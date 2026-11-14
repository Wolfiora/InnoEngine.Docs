---
uid: api.bef681cee0ca6187b61e6e451ac35e542fee739555cb8716f36bdc03d20a90b3
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationContext.GetRequired\u0060\u00601"
source: xml
reviewed: f11fea6137adf088aae8ea1419bc50cddd8ccd12325702cdead55583d099ed9c
title: "SerializationContext.GetRequired"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Resolves a value registered under the exact context contract type.

## Type parameters

**Type parameter `TContext`:** The exact context contract type.

## Returns

The registered context value.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the requested context was not registered.
