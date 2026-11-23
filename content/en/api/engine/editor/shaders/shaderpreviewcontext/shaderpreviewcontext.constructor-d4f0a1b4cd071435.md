---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d4f0a1b4cd071435875424c8ce376f87da59b0d1b8931596c7df724909a4fbc9
symbol: engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.ShaderPreviewContext.#ctor(Inno.Rendering.Runtime.RenderPersistentResourceID,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Diagnostics.IDiagnosticReporter,System.Int32,System.Int32)
title: ShaderPreviewContext.Constructor
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: source-clr
sourceFingerprint: 89aa69c3b8ea16957d254fde9ce35daf7ba4cbb409d7d9d2db2dd7e39bce1ddb
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
