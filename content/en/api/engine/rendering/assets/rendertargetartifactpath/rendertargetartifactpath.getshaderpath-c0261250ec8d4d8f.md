---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c0261250ec8d4d8f593cbe188c9ae04b0dc74f1b29fde808e12cd9c624455fc5
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTargetArtifactPath.GetShaderPath(System.Guid,Inno.Rendering.GraphicsApi,Inno.Rendering.Assets.RenderShaderVariant)
title: RenderTargetArtifactPath.GetShaderPath
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: c55869fbda3504a433ed18bda7ac69bd277d08a6623443d9a1267244cb70a0a4

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `shaderId`:** The persistent shader asset identity.

**Parameter `backend`:** The graphics backend selected by the target Player.

**Parameter `variant`:** The canonical static keyword selection.

## Returns

A platform-neutral path beneath the runtime content root.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `shaderId` is empty.
