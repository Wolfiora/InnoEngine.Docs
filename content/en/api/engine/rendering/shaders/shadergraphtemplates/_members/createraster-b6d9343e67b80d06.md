---
uid: api.b6d9343e67b80d061554648b5c6892e2a46a00d89b9b311637644adbb176d969
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: da8ef57fbc25f93f694edc542a25dbaba31813e77c1aa0cd5a7aaf93aec934bf
title: "CreateRaster"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a raster graph accepting clip-space XY positions and an exposed RGBA color.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context for material defaults.

**Returns:** A valid two-stage document; pipelines may replace its vertex transform or provide their own templates.
