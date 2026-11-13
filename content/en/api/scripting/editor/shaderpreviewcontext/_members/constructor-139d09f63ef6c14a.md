---
uid: api.139d09f63ef6c14a3f32b646043344512bcd87569b566149e1927b0997e1821f
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewContext.#ctor(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.ShaderDefinition,InnoEngine.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)"
source: xml
reviewed: 75d660a34f9dfa4d9627997a065faa4903dc341cd29ed01b1b9f57c44a14fb70
title: "Constructor"
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
