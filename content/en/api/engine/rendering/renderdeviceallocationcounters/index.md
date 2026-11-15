---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.rendering.3aaaed440a9febd0
symbol: engine:Inno.Rendering:T:Inno.Rendering.RenderDeviceAllocationCounters
title: RenderDeviceAllocationCounters
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 3ceec06be8ad4b46c2749f7119b93171ce67ed5fc90ef76e3a8a5aaed7c66f3b

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-rendering
aliases: []
---

Reports cumulative successful native allocations made by a device's transient graph resource pools. Pool reuse does not increment these counters; retirement does not decrement them. They are not live resource counts, managed allocation counts, byte measurements or per-frame command counts.
