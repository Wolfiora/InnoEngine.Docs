---
uid: api.ddc9c17c72fe462367eef88bdc51ae4cd38dc2708c05c09e0ff03f8594fd949a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.TryGetValue(System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor@)"
source: xml
reviewed: b73592587ddddada8bf4dbe65ba6df82b58c51d616b8592840e545d9d18e5dd4
title: "TryGetValue"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Gets the value that is associated with the specified key.

**Parameter `key`:** The key to locate.

**Parameter `value`:** When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the `value` parameter. This parameter is passed uninitialized.

**Exception `T:System.ArgumentNullException`:** `key` is `null`.

**Returns:** `true` if the object that implements the ``T:System.Collections.Generic.IReadOnlyDictionary`2`` interface contains an element that has the specified key; otherwise, `false`.

## Remarks

A returned descriptor is borrowed and must not be used to access files after this result is disposed.

**Exception `T:System.ObjectDisposedException`:** Reading ownership has ended.
