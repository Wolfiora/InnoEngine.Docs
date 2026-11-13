---
uid: api.f48c9c02dce47977eb393eafd888cfbaf1c9b01c855e0617c90c79775fc1d456
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderStageArtifact.#ctor(Inno.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: c3957adb668f5eeab830cd5a1f65edca3ea328e8c15c2f87eabf7e11b42ea45f
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a deployed shader stage.

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

**Exception `T:System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.
