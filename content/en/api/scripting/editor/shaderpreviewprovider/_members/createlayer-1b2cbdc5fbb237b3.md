---
uid: api.1b2cbdc5fbb237b3e828b47ac1fcfcaf94783dbdea406730bf688395b90dc871
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewProvider.CreateLayer(InnoEditor.Shaders.ShaderPreviewContext)"
source: xml
reviewed: dbac2795a54ad51c4efbe4e64b557d8a8a6c054f4f93082df0a05b9774a4c02f
title: "CreateLayer"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates one frame-local rendering layer through the ordinary Render Graph.

**Parameter `context`:** Detached Material, immutable candidate and isolated diagnostics for this invocation.

**Returns:** A domain-selected pipeline and frame payload; no instance may be retained beyond the submitted frame.
