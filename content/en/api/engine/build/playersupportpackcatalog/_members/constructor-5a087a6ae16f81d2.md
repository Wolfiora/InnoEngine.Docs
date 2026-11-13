---
uid: api.5a087a6ae16f81d2db440c9ebd616837b11b86a7324097603c7e41b02ed2b13b
symbol: "engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.#ctor(System.String)"
source: xml
reviewed: 949762a2550bb42e3415427ff547e4ded042da715e458ee6488a56a010391875
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a catalog rooted at the directory containing target-specific Player Support Packs.

**Parameter `root`:** The directory whose target children contain immutable fingerprint directories and a current index.

**Exception `T:System.ArgumentException`:** Thrown when `root` is empty.
