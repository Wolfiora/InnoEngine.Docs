---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.139d09f63ef6c14a3f32b646043344512bcd87569b566149e1927b0997e1821f
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewContext.#ctor(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.ShaderDefinition,InnoEngine.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)
title: ShaderPreviewContext.Constructor
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
reviewed: 1a5a16837e4cd59f761b2d95b4e291ada6d3e7833632d527bf47e0defb6f1a73
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resourceId`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.
