---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a2086a52891996a59edad5104d53bd53a91e732975cf84be55e677f2c1140475
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderOutputSession.#ctor(System.String,Inno.References.ContentReadScope,Inno.Rendering.RenderViewport,System.UInt64,System.Single,Inno.Rendering.Runtime.IViewContentCollector,Inno.Rendering.Runtime.RenderOutputInput,Inno.Rendering.Runtime.RenderOutputRoute)
title: RenderOutputSession.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 896a581ae5f2844207b173771f38beacc349006e0bd8cab75f8bf6880f7705a2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable host output identity.

**Parameter `content`:** Host-selected content roots.

**Parameter `viewport`:** Pixel rectangle within the target.

**Parameter `frameIndex`:** Shared output frame index.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `viewContent`:** Model-independent world content collector.

**Parameter `input`:** Viewport-local input.

**Parameter `route`:** Explicit composition route when several models are applicable.
