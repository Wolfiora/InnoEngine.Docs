---
uid: api.73993660f2e636e217d25b23947eba1b1cf95aecd1492aa0bf4362be9031a720
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationContext.GetRequired\u0060\u00601"
source: xml
reviewed: a673ae627c6d1ffabdc21c1d19f8e42cc41f88d1a1ecc17bbc6ec727e87e4f4a
title: "SerializationContext.GetRequired"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Resolves a value registered under the exact context contract type.

## Type parameters

**Type parameter `TContext`:** The exact context contract type.

## Returns

The registered context value.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the requested context was not registered.
