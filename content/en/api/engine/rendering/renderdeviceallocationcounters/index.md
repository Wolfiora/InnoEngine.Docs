---
uid: api.inno.rendering.3aaaed440a9febd0
symbol: "engine:Inno.Rendering:T:Inno.Rendering.RenderDeviceAllocationCounters"
source: xml
reviewed: 6210da9b6179588528d56f5ce7391efb4ba8a9ff18482724adad9f86433ce2ef
title: "RenderDeviceAllocationCounters"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
contracts:
- project.inno-rendering
aliases: []
---

Reports cumulative successful native allocations made by a device's transient graph resource pools. Pool reuse does not increment these counters; retirement does not decrement them. They are not live resource counts, managed allocation counts, byte measurements or per-frame command counts.
