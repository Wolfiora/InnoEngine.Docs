---
uid: api.139d09f63ef6c14a3f32b646043344512bcd87569b566149e1927b0997e1821f
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewContext.#ctor(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.ShaderDefinition,InnoEngine.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)"
source: xml
reviewed: 1bceca9e8eff28bc2bb40926dac90f4ffc62776b5d22a48b0922d568eca0c7bf
title: "ShaderPreviewContext.Constructor"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a preview invocation from host-owned detached inputs.

**Parameter `resourceId`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.
