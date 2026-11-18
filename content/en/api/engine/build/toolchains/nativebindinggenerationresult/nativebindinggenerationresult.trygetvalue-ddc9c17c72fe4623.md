---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ddc9c17c72fe462367eef88bdc51ae4cd38dc2708c05c09e0ff03f8594fd949a
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingGenerationResult.TryGetValue(System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor@)
title: NativeBindingGenerationResult.TryGetValue
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 6d9adb786afca67fde90c40bd321ffba692f5af285553a879ecc06e5b1a669ee
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The key to locate.

**Parameter `value`:** When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the `value` parameter. This parameter is passed uninitialized.

## Exceptions

**Exception `T:System.ArgumentNullException`:** `key` is `null`.

**Exception `T:System.ObjectDisposedException`:** Reading ownership has ended.

## Returns

`true` if the object that implements the ``T:System.Collections.Generic.IReadOnlyDictionary`2`` interface contains an element that has the specified key; otherwise, `false`.

## Remarks

A returned descriptor is borrowed and must not be used to access files after this result is disposed.
