---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bf930dc96662e8285a05aea165a6c7498864b85cfa63687a81cacb8f924437d
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize})
title: IRenderDevice.SetPrimaryPresentationSize
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 7420a60e111e5e1ccd499cf24a9e795edbde3649d6914f2eea13c18aca6f74a2
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
