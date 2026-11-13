---
uid: api.92d2afb8e19e2eb7ed8faddf56a4ffab240e853f4fee30cb19e3b2f81e38ee85
symbol: "engine:Inno.Storage:M:Inno.Storage.StorageKey.#ctor(System.String)"
source: xml
reviewed: 2a5ec762063f087d50fa075bd6f57bfe7784484db9a23a942e9e39c2495ce90b
title: "Constructor"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Creates a normalized storage key from slash-separated path segments.

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

**Exception `T:System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.
