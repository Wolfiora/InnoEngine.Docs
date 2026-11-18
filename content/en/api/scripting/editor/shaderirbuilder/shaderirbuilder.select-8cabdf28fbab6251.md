---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8cabdf28fbab6251c00abbb4c534ae679b04614d0808a98c0f07861066f44b4c
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Select(InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue,InnoEditor.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.Select
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: 6d2436023198f7d3d77513f7f18ecfa896f6b2e2524dd5b5bbd4e2a68a12ce06
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `condition`:** Scalar Boolean condition from this builder.

**Parameter `whenTrue`:** Value selected when true.

**Parameter `whenFalse`:** Value selected when false.

## Returns

A value with the selected operands' complete type.

## Exceptions

**Exception `T:System.ArgumentException`:** The condition is not bool or selected value types differ.
