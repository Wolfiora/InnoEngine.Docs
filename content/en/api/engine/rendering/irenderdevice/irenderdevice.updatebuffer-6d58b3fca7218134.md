---
uid: api.6d58b3fca7218134cedb4f0de4b37dedd38167d832d4f206c3460739f816336a
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.UpdateBuffer(Inno.Rendering.PersistentBufferHandle,System.ReadOnlySpan{System.Byte},System.Int32)"
source: xml
reviewed: 30d4c8fa415e0b74c2781e943acc8cf6e7298c14fd7e11bcc9d8e2cf77ee29ae
title: "IRenderDevice.UpdateBuffer"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Replaces a contiguous range in a dynamic persistent buffer at a frame safety point.

**Parameter `buffer`:** Dynamic buffer owned by this device generation.

**Parameter `data`:** Complete replacement elements.

**Parameter `startElement`:** Zero-based destination element.
