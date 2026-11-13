---
uid: api.fd35b1e8ff559c9b6cc8e099e47fca49e04e094224b5e31884f4bf0e14048dda
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.#ctor(InnoEditor.Rendering.Shaders.ShaderSourceFunction,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic})"
source: xml
reviewed: 2c44ad2b9ac8ad9a1c6dd078c3d513ffbb8cbca661c3d1b7c56b40a67eb14cc8
title: "Constructor"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Captures a completed analysis without retaining compiler objects.

**Parameter `function`:** Parsed interface, or null when parsing failed.

**Parameter `dependencies`:** Resolved included sources, excluding the root.

**Parameter `diagnostics`:** All problems discovered by the frontend.
