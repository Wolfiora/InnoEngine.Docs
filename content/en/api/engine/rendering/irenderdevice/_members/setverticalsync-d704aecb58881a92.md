---
uid: api.d704aecb58881a92db28149b053f55f21c5ac4a87387aa5851cf2f9ac98d7570
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetVerticalSync(System.Boolean)"
source: xml
reviewed: cb7f2182482cffe9a6dcca2d9cfa52d55c8b25e96b26f4286bd0b39d59208815
title: "SetVerticalSync"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Queues display synchronization policy on the API thread for the next frame boundary. Every backend must implement both policies. Repeated values are idempotent and must not reset an active pass. Windowless devices retain the requested policy without performing presentation.

**Parameter `enabled`:** Whether presentation should wait for display refresh when a presentation surface is present.
