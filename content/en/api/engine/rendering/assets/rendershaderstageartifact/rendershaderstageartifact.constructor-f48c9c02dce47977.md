---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f48c9c02dce47977eb393eafd888cfbaf1c9b01c855e0617c90c79775fc1d456
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderStageArtifact.#ctor(Inno.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte})
title: RenderShaderStageArtifact.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: ccc2b5e206f557daf77986524b4b65d0c8f83f7e0967002c5d67fd6c5e052bc4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.
