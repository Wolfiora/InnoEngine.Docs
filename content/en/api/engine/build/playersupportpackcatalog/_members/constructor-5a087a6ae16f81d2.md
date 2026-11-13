---
uid: api.5a087a6ae16f81d2db440c9ebd616837b11b86a7324097603c7e41b02ed2b13b
symbol: "engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.#ctor(System.String)"
source: xml
reviewed: 68852130659034698c5168a4b95e2e500526a5641e6101b69bbd787250827a9c
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a catalog rooted at the directory containing target-specific Player Support Packs.

**Parameter `root`:** The directory whose target children contain immutable fingerprint directories and a current index.

**Exception `T:System.ArgumentException`:** Thrown when `root` is empty.
