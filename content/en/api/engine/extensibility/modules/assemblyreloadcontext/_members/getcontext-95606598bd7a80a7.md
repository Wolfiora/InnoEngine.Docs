---
uid: api.95606598bd7a80a72ce3d88986e96e44518e4008ca9826e424bc78629b25a231
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadContext.GetContext\u0060\u00601"
source: xml
reviewed: be77a4ed74ec9d5e901b029da68c6124f03f2007cc0a0505b78a4142a4e2757e
title: "GetContext"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Gets a context contributed by a registered catalog participant.

**Type parameter `TContext`:** The requested participant context type.

**Returns:** The matching context.

**Exception `T:System.InvalidOperationException`:** Thrown when no participant supplied the requested context or the reload has completed.
