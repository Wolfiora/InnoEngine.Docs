---
uid: api.09a25ae014989b294bcc746b611ae490cc1db5e25730f373182b1e2e5c2c39f8
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentBufferHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 1abf89959eaebb594b3e6a14ae1770deab9772653894105b97b78052b1d6e77e
title: "CreatePersistentBufferHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a persistent buffer identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero buffer identity.

**Parameter `generation`:** The device generation that owns the buffer.

**Returns:** An opaque buffer handle suitable for the public render-device contract.
