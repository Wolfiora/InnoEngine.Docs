---
uid: api.95abce54c0cc7db3b34add36ddbe1c4921dfe8b5e43a045c6e048ca05a5ba08c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.GetEnumerator"
source: xml
reviewed: f9f829776f4fc0396c2172263fb7cfc015af36a8452b72d993ca28c2eaf4a3b2
title: "GetEnumerator"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Returns an enumerator that iterates through the collection.

**Returns:** An enumerator that can be used to iterate through the collection.

## Remarks

Enumeration and all descriptor consumers must finish before the result's reading protection ends.

**Exception `T:System.ObjectDisposedException`:** Reading ownership has ended.
