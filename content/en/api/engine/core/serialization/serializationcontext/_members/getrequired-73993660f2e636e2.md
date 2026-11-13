---
uid: api.73993660f2e636e217d25b23947eba1b1cf95aecd1492aa0bf4362be9031a720
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationContext.GetRequired\u0060\u00601"
source: xml
reviewed: fb3ca01f11b6758ce535d23de58918c793bfabf5d3e97e90e862a1ea612437e3
title: "GetRequired"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Resolves a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Returns:** The registered context value.

**Exception `T:System.InvalidOperationException`:** Thrown when the requested context was not registered.
