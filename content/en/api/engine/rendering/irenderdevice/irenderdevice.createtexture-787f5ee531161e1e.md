---
uid: api.787f5ee531161e1e2d26abd6e9c5aad8d889720f46791d41217f62a56c0787c3
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureContainer,System.ReadOnlySpan{System.Byte},System.Boolean,System.String)"
source: xml
reviewed: 5d382786d6ed52f838573904357e69d15f9a42d110c29e8f039a1e2850c9acf5
title: "IRenderDevice.CreateTexture"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a persistent sampled texture from a validated portable container.

**Parameter `container`:** Portable texture container kind.

**Parameter `data`:** Complete encoded container bytes.

**Parameter `sRgb`:** Whether sampling decodes the stored color from sRGB.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation handle.

**Exception `T:System.NotSupportedException`:** Thrown when the device cannot consume encoded containers.
