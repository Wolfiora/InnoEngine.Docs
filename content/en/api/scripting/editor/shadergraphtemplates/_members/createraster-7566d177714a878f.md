---
uid: api.7566d177714a878f6b1fa5c68cac1b7c6bd5763977ee1fac85be207ffdb2ec6d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 99edf99668071d82ae8ecf596f63aafa73f68038cf59ece28d0d5047cc37c6fd
title: "CreateRaster"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a raster graph accepting clip-space XY positions and an exposed RGBA color.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context for material defaults.

**Returns:** A valid two-stage document; pipelines may replace its vertex transform or provide their own templates.
