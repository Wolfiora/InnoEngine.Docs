---
uid: api.06ec6bdd8dcad58db5130ac1a53fc0ea4eac43be9042fcea43052ee25babaed4
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32)"
source: xml
reviewed: 70a4a915fd9bd82474121b17a13db705886bbe9b5758757cfa4fb0da4a293958
title: "DrawIndirect"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
