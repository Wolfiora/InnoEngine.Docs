---
uid: api.dfcadd1823618f8fbb079194fc6916898fc4e3810977a647e150281ec8851c45
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Call(InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: 7b617c2c03b87f7d407f2dfc99f11085b80748edf6618ca196d46eb4a146f8bb
title: "Call"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Calls a validated source implementation using semantic parameter names, preserving all call side effects.

**Parameter `module`:** A module whose selected implementations and variants share the same interface.

**Parameter `implementationId`:** The exact implementation/configuration selected by the target.

**Parameter `inputs`:** Exactly the input/inout parameters by public name; output-only parameters are not supplied.

**Returns:** Named results: `return`, followed by `output.<name>` for out/inout parameters.

**Exception `T:System.ArgumentException`:** The module failed, implementation is absent, or input names/types do not match.
