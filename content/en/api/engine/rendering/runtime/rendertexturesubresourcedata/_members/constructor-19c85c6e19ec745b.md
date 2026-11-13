---
uid: api.19c85c6e19ec745b0cee184d16ffb122f76bd01e9f26bdab82afda265265eca8
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTextureSubresourceData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 41c9ac74b3a4ae92cd575132c1126c898b9acc0b629812d199ac0c575f50b459
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates one immutable texture subresource upload.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer \* 6 + face.

**Parameter `data`:** Tightly packed complete subresource bytes.
