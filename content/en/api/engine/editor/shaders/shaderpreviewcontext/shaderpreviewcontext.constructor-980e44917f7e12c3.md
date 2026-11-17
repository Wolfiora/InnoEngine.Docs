---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.980e44917f7e12c368f1e3d4204ce4ca9b9742113d981b47d2c21b04983d7922
symbol: engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderPreviewContext.#ctor(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)
title: ShaderPreviewContext.Constructor
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: source-clr
reviewed: d260fca99cb210c1b66e1977e1dc2f37c23cd28b0f6f14ac93ac304ae5bc096b
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
