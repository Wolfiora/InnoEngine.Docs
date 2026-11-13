---
uid: api.df28436d06e190d00d8be0952f2c7dbd1eaa34f7c82dee5b1c78ce68778b0cf7
symbol: "engine:Inno.Adapter.Text:M:Inno.Adapter.Text.TextBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider})"
source: xml
reviewed: 8a6d103670babf43941f4695d4c7e680e3cc616d500f02ffcbc908a0e6150303
title: "Constructor"
kind: api
owners: [Inno.Adapter.Text]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
