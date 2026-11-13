---
uid: api.fd35b1e8ff559c9b6cc8e099e47fca49e04e094224b5e31884f4bf0e14048dda
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceAnalysis.#ctor(InnoEditor.Rendering.Shaders.ShaderSourceFunction,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic})"
source: xml
reviewed: 1683920f95fe9c01764f737b1f45cc2f2de923fb875c857244b73c8fbee35d13
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
