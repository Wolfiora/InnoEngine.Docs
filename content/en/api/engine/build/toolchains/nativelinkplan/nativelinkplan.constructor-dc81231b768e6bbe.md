---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dc81231b768e6bbe2b9cb24ff274ce95b37516aab8b8670fa14a10258a8a1605
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String})
title: NativeLinkPlan.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 439001e50a94af086cc35fb71704a7a79c2c3d17612cfd2c189a9448e7caf760
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sharedLibraryExtension`:** The shared-library suffix, or null when shared linkage is unsupported.

**Parameter `importLibraryExtension`:** The separate import-library suffix, or null when the shared library is the link input.

**Parameter `staticLibraryExtension`:** The archive suffix, or null when static linkage is not contributed.

**Parameter `cmakeArguments`:** Ordered platform-owned CMake linker definitions.

## Exceptions

**Exception `T:System.ArgumentException`:** No format is supported, an import format lacks shared linkage, a suffix is invalid, or an argument is null.
