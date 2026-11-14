---
uid: api.164577f243700aa5b1cf17060c362ae257a02b945622ff7be5b0bca52cbe0c61
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.StorageKey.#ctor(System.String)"
source: xml
reviewed: 2c54033c606c439fe9762cf286763c3bccbad254634162e2c5bdaee1215b361b
title: "StorageKey.Constructor"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Creates a normalized storage key from slash-separated path segments.

## Parameters

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.
