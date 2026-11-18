---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a98e9353e0b025d8960e1693fb7f31bdcc8a92bc016202fb2772369a05d655c7
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Select(Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue,Inno.Rendering.Shaders.ShaderIrValue)
title: ShaderIrBuilder.Select
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: fa3889dc83381da58c246c5ff6fff06e177618a7dce673a5f5eb772837e2418e
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
