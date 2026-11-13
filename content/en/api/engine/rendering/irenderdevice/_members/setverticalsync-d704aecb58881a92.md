---
uid: api.d704aecb58881a92db28149b053f55f21c5ac4a87387aa5851cf2f9ac98d7570
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetVerticalSync(System.Boolean)"
source: xml
reviewed: 867c65b055f3c5de09077ef0049b91805639dc557a9ab821413bf7e75da6d0f2
title: "SetVerticalSync"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Queues display synchronization policy on the API thread for the next frame boundary. Every backend must implement both policies. Repeated values are idempotent and must not reset an active pass. Windowless devices retain the requested policy without performing presentation.

**Parameter `enabled`:** Whether presentation should wait for display refresh when a presentation surface is present.
