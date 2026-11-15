---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dc81231b768e6bbe2b9cb24ff274ce95b37516aab8b8670fa14a10258a8a1605
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String})
title: NativeLinkPlan.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: b6c8faff9755e5bef79ec217d6be232afca22619208abf350a91a083143af110

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `sharedLibraryExtension`:** The shared-library suffix, or null when shared linkage is unsupported.

**Parameter `importLibraryExtension`:** The separate import-library suffix, or null when the shared library is the link input.

**Parameter `staticLibraryExtension`:** The archive suffix, or null when static linkage is not contributed.

**Parameter `cmakeArguments`:** Ordered platform-owned CMake linker definitions.

## Exceptions

**Exception `T:System.ArgumentException`:** No format is supported, an import format lacks shared linkage, a suffix is invalid, or an argument is null.
