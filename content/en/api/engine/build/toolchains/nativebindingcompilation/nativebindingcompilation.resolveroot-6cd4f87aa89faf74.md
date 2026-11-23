---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6cd4f87aa89faf74d985b966d880635d2721554d7c75b3fa7bd986873aa019a3
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.ResolveRoot(System.String,System.String,System.String)
title: NativeBindingCompilation.ResolveRoot
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: fc185945154218a18b292585baf57ae80f5e6a166bfdc3fcffa9dd8c97ad7a29
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected generation's absolute native output.

**Parameter `rootID`:** An ordinal root identity from this description.

## Returns

The physical root; no other component's root table participates.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The root identity is unknown.
