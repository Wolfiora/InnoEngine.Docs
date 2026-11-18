---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dfcadd1823618f8fbb079194fc6916898fc4e3810977a647e150281ec8851c45
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Call(InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue})
title: ShaderIrBuilder.Call
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: d18629910c3b471d266d6a27cf76f5eb4181abf58e710ca554ad7d469739558b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationId`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

## Returns

Named results: `return`, followed by `output.<name>` for out/inout parameters.

## Exceptions

**Exception `T:System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.
