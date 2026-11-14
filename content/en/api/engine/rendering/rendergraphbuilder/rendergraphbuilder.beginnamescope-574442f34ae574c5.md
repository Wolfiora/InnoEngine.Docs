---
uid: api.574442f34ae574c5023bbafaa8b42ba44c3282cb719316d522b97fab9e270af1
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.BeginNameScope(System.String)"
source: xml
reviewed: 48abfd46536d13427d93e4ba51d9d6ab957d692ea9c1af6cf1e11c9ae6e644ab
title: "RenderGraphBuilder.BeginNameScope"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Prefixes pass and resource diagnostic names until the returned scope is disposed.

## Parameters

**Parameter `name`:** Non-empty scope segment.

## Returns

A disposable name scope that must be closed in nesting order.
