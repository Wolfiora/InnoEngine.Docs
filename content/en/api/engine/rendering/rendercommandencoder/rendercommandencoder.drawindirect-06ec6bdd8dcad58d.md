---
uid: api.06ec6bdd8dcad58db5130ac1a53fc0ea4eac43be9042fcea43052ee25babaed4
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: c76fa290d17266fbb194624a8317d2ceb1795d2d015ef366a1a3328b669cd7f2
title: "RenderCommandEncoder.DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits draws described by consecutive commands in an indirect buffer.

## Parameters

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
