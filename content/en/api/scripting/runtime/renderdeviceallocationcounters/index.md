---
uid: api.inno.rendering.runtime-script.1b2782dc07767cb8
symbol: "scripting:Inno.Rendering:T:InnoEngine.Rendering.RenderDeviceAllocationCounters"
source: xml
reviewed: 1c364421f30921cf58abf5c7bf804441c92ae3488f9dcd96272ab80357e25efb
title: "RenderDeviceAllocationCounters"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-rendering
aliases: []
---

Reports cumulative successful native allocations made by a device's transient graph resource pools. Pool reuse does not increment these counters; retirement does not decrement them. They are not live resource counts, managed allocation counts, byte measurements or per-frame command counts.
