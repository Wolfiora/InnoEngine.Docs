---
uid: api.164577f243700aa5b1cf17060c362ae257a02b945622ff7be5b0bca52cbe0c61
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.StorageKey.#ctor(System.String)"
source: xml
reviewed: 7a7cc94fc6f19c0aaf9c1b759efb33dd580e39d3d62c18ddfc2b2d837c790f15
title: "Constructor"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Creates a normalized storage key from slash-separated path segments.

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

**Exception `T:System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.
