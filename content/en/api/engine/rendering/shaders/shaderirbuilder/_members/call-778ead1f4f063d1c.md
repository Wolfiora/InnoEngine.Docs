---
uid: api.778ead1f4f063d1c4bc1cbd81b9c7213db215693d43784cc3da45c208fa00fc1
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Call(Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: d4a9cdcdd05e31235207a0731bc5e2329345ea408d81d106610d7ca1283e1f04
title: "Call"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Calls a validated source implementation using semantic parameter names, preserving all call side effects.

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationId`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

**Returns:** Named results: `return`, followed by `output.<name>` for out/inout parameters.

**Exception `T:System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.
