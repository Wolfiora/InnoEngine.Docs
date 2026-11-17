---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cc8811dc5ae6c21640aebb8de8e7004863442d2e335b9d9810ecbe19751edb4b
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ViewContentContext.#ctor(Inno.References.ContentReadScope,System.String,Inno.Rendering.Runtime.RenderView,System.UInt64,System.Single,Inno.Rendering.Runtime.RenderOutputInput,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderView},System.Collections.Generic.IReadOnlyList{System.String})
title: ViewContentContext.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: b14e93619bb032a43d746543311d75c1d3be56b3349a70e4c580763c79755e4b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `content`:** Ordered roots selected by the host.

**Parameter `sessionId`:** Stable identity of the host output session.

**Parameter `view`:** Exact view that will consume the content.

**Parameter `frameIndex`:** Monotonic output frame number.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `input`:** Pointer and keyboard input in output pixel coordinates.

**Parameter `views`:** All views in the same model output, used to choose shared content resolution.

**Parameter `sourceIds`:** Optional explicit source allowlist for a routed model layer.
