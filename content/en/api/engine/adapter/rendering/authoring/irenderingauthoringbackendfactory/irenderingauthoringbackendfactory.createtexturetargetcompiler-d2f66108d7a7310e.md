---
uid: api.d2f66108d7a7310e0cc236321425ed10c16be8407ae50e55e9db86f16bb43e51
symbol: "engine:Inno.Adapter.Rendering.Authoring:M:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 9f4213332934e0729214d7375c93604bc38dd2052773f5ebd6d2d5e10a34fe69
title: "IRenderingAuthoringBackendFactory.CreateTextureTargetCompiler"
kind: api
owners: [Inno.Adapter.Rendering.Authoring]
apiSurface: source-clr
---

Creates the texture compiler paired with the selected rendering backend.

## Parameters

**Parameter `backend`:** Stable rendering backend identity selected by the authoring composition root.

## Returns

A texture target compiler compatible with devices created for the same backend.
