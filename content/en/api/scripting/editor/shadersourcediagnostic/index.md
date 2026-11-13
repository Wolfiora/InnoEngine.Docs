---
uid: api.inno.rendering.shaders.editor-script.fecd5b1d4cf2bd44
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic"
source: xml
reviewed: a30502e1655e1d07243d21c12069952882b1c40613a68e19a15193fc4fbc283a
title: "ShaderSourceDiagnostic"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-shaders
aliases: []
---

Reports a frontend problem without retaining a language-specific exception or parser.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.
