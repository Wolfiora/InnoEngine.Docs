---
uid: api.1b2cbdc5fbb237b3e828b47ac1fcfcaf94783dbdea406730bf688395b90dc871
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderPreviewProvider.CreateLayer(InnoEditor.Shaders.ShaderPreviewContext)"
source: xml
reviewed: c58896f893af82a23ab167e93b2919596cf3d7c70f083e82b1604f5ed57256f7
title: "CreateLayer"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates one frame-local rendering layer through the ordinary Render Graph.

**Parameter `context`:** Detached Material, immutable candidate and isolated diagnostics for this invocation.

**Returns:** A domain-selected pipeline and frame payload; no instance may be retained beyond the submitted frame.
