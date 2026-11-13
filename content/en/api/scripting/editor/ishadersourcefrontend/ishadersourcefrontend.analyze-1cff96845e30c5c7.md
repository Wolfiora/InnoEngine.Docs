---
uid: api.1cff96845e30c5c798462d3f9e4c401b47e8ff4e1262fe47bc922fc5b964aab5
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.IShaderSourceFrontend.Analyze(InnoEditor.Rendering.Shaders.ShaderSourceRequest)"
source: xml
reviewed: 0531a4303ab72090e120b4481a56cc205acb9bd0754b806e8ad36cef7b0b85fc
title: "IShaderSourceFrontend.Analyze"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Analyzes an immutable source candidate with explicit preprocessing inputs.

**Parameter `request`:** Source, selected function, dependencies, and target inputs.

**Returns:** A successful interface or a recoverable set of original-source diagnostics.
