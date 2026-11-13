---
uid: api.fac5c439268833b7cefd8b54e8267a0222e6276b417c83b3047b057659c47867
symbol: "engine:Inno.Content:M:Inno.Content.IRuntimeContentStore.Acquire(Inno.Content.ContentKey)"
source: xml
reviewed: e04c69f7e258bf5c1f645079a066861cc754cee49f5472bdbdea8a565e309878
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
