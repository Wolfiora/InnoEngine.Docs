---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a78150a2bbf2bc06bbb4b1996f095092e3f0c383afa23ddad5eeaf9a9d9c820e
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewContext.#ctor(InnoEngine.Rendering.RenderPersistentResourceID,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.ShaderDefinition,InnoEngine.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)
title: ShaderPreviewContext.Constructor
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
sourceFingerprint: 67fb0cf8d6a533873074e1512ee829e53b907bd470e91de165be17733ca5b12c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resourceID`:** Isolated material publication and viewport resource identity.

**Parameter `material`:** Detached values with a current Shader reference; do not modify the reference.

**Parameter `artifact`:** Compiled candidate, never published as a canonical Shader.

**Parameter `definition`:** Detached contract captured by the candidate.

**Parameter `diagnostics`:** Preview-local reporter; errors must not contaminate project diagnostics.

**Parameter `pixelWidth`:** Positive target width.

**Parameter `pixelHeight`:** Positive target height.
