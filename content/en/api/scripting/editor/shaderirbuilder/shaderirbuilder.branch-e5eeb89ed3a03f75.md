---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e5eeb89ed3a03f753a6c2c4871785d28a3833c4dbda86fa742a6f89cfc2207c5
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Branch(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}})
title: ShaderIrBuilder.Branch
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 97073465d79389877863e1ff86c8e5bed4a3ad85b5a1276cd2dff74c2009e8f1
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `condition`:** Scalar Boolean visible in this region.

**Parameter `whenTrue`:** Transient callback building the true region and its named outputs.

**Parameter `whenFalse`:** Transient callback building the false region with exactly matching output names/types.

## Returns

Values merged into the enclosing scope; empty output maps represent effect-only branches.

## Exceptions

**Exception `T:System.ArgumentException`:** The condition or branch output contracts are incompatible.

**Exception `T:System.InvalidOperationException`:** A callback mutates the enclosing scope or declares a nested stage input.
