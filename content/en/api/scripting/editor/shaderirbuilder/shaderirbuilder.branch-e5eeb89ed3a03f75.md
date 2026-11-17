---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e5eeb89ed3a03f753a6c2c4871785d28a3833c4dbda86fa742a6f89cfc2207c5
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Branch(InnoEditor.Rendering.Shaders.ShaderIrValue,System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}},System.Func{InnoEditor.Rendering.Shaders.ShaderIrBuilder,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue}})
title: ShaderIrBuilder.Branch
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: d62673a59b5307e2b2b5e1f83e1f56a6e5ee70b29024e4a016400db21b955a98
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
