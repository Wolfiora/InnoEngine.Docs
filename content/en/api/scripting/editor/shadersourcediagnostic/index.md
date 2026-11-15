---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.rendering.shaders.editor-script.fecd5b1d4cf2bd44
symbol: scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic
title: ShaderSourceDiagnostic
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: c5572a5e4ef2d9ccbc29de83f3bc5e57a646fcee3f4792bc3549e82a77753285
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-shaders
aliases: []
---

Reports a frontend problem without retaining a language-specific exception or parser.

## Parameters

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.
