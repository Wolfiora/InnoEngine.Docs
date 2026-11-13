---
uid: api.980e44917f7e12c368f1e3d4204ce4ca9b9742113d981b47d2c21b04983d7922
symbol: "engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderPreviewContext.#ctor(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)"
source: xml
reviewed: 534d0c94be80ace1383cb5869b106917a327fdf6c118992adf8d2fa97e9ce404
title: "Constructor"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: source-clr
---

Creates a preview invocation from host-owned detached inputs.

**Parameter `resourceId`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.
