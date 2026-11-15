---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f68e1e78e7a29f0b505229abcb7719017fea837c31626287398eb6233d6bf621
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IViewContentCollector.Collect(Inno.Rendering.Runtime.ViewContentContext)
title: IViewContentCollector.Collect
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 3a5804fcb6a8ce46fd4e97e4fbf69ba3f15ae70caaa65f0afc8aff495c2a2d5e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Collects active source items in deterministic source order.

## Parameters

**Parameter `context`:** Frame-scoped host content and view.

## Returns

Frame-local items; the caller owns their sort and composition.
