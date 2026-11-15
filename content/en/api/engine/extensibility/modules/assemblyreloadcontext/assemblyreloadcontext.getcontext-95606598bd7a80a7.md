---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.95606598bd7a80a72ce3d88986e96e44518e4008ca9826e424bc78629b25a231
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadContext.GetContext``1
title: AssemblyReloadContext.GetContext
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 76a733ca0fb1d3ed399d810c23e3f1d11c71f8627597456ac9b6cbf42d56a147

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets a context contributed by a registered catalog participant.

## Type parameters

**Type parameter `TContext`:** The requested participant context type.

## Returns

The matching context.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no participant supplied the requested context or the reload has completed.
