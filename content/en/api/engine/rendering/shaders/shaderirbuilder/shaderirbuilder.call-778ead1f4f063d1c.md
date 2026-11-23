---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.778ead1f4f063d1c4bc1cbd81b9c7213db215693d43784cc3da45c208fa00fc1
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Call(Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue})
title: ShaderIrBuilder.Call
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 801a297329cb56f86b10bdfc586976dd32c11782bc34193b4e0c7fe4092b37a7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationID`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

## Returns

Named results: `return`, followed by `output.<name>` for out/inout parameters.

## Exceptions

**Exception `T:System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.
