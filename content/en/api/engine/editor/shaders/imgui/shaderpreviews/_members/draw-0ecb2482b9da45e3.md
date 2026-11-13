---
uid: api.0ecb2482b9da45e331fac5042fb43ec6a1341f77155c0de81ac981994e9536da
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderPreviews.Draw(System.Guid,Inno.Rendering.Assets.MaterialAsset,Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot,System.Single)"
source: xml
reviewed: 7ce428200a43962d2d390debdc597e4179f2d76da14e286a3afa2bdf26a73cc2
title: "Draw"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Draws a compiled draft without modifying the source Shader or its canonical runtime publication.

**Parameter `ownerId`:** Persistent document identity, independent of the canonical Shader publication.

**Parameter `material`:** Detached defaults or overrides with the current Shader reference.

**Parameter `compilation`:** Isolated draft compiler result, including explicit last-good state.

**Parameter `logicalSize`:** Positive square image size in logical pixels.
