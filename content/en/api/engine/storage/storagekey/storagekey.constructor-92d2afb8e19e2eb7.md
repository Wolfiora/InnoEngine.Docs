---
uid: api.92d2afb8e19e2eb7ed8faddf56a4ffab240e853f4fee30cb19e3b2f81e38ee85
symbol: "engine:Inno.Storage:M:Inno.Storage.StorageKey.#ctor(System.String)"
source: xml
reviewed: 0b7a6e18062744d2a3b238c99dcc23b32a5ec7a67d09b99da67c607d1e7d074a
title: "StorageKey.Constructor"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Creates a normalized storage key from slash-separated path segments.

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

**Exception `T:System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.
