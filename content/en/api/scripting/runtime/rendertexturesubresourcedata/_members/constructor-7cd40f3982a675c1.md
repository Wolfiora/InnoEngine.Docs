---
uid: api.7cd40f3982a675c129c1b1ae8cfa8cb851f2020452a00e817cbbb83e2c720274
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderTextureSubresourceData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 1fe3c70b41fb86c8d62cbf1836547911f07013ed0cadee877fa355a066ecbf01
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates one immutable texture subresource upload.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer \* 6 + face.

**Parameter `data`:** Tightly packed complete subresource bytes.
