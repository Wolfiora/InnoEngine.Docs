---
uid: api.a0eb64f032c5c86ba3e64aa7652217ac3381747761867d4375637ce37397d8f1
symbol: "engine:Inno.Content:M:Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey)"
source: xml
reviewed: a4f3fe6c180ddd8c24777495b5ba7c9407874dcf4b5eeb3737907ea89292773d
title: "Acquire"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Exception `T:System.IO.FileNotFoundException`:** The exact content key is not present.

**Exception `T:System.ObjectDisposedException`:** The store has closed and cannot issue new leases.
