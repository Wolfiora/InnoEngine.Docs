---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bf930dc96662e8285a05aea165a6c7498864b85cfa63687a81cacb8f924437d
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize})
title: IRenderDevice.SetPrimaryPresentationSize
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 65619cf9c3d25d79ee9074c1044784911a20ab40ecc3596251879d277a80d5d9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `size`:** A valid drawable pixel extent, or null when the primary surface cannot currently present.

## Exceptions

**Exception `T:System.ArgumentException`:** The assigned extent has zero or negative dimensions, including a default struct value.
