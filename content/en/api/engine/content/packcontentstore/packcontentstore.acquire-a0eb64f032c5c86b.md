---
uid: api.a0eb64f032c5c86ba3e64aa7652217ac3381747761867d4375637ce37397d8f1
symbol: "engine:Inno.Content:M:Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey)"
source: xml
reviewed: 5079dae92b4b2f97d461ed32c9ab3d19d0543ef352cc6ca889797a26212e00f0
title: "PackContentStore.Acquire"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Exception `T:System.IO.FileNotFoundException`:** The exact content key is not present.

**Exception `T:System.ObjectDisposedException`:** The store has closed and cannot issue new leases.
