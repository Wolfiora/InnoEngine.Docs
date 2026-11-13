---
uid: api.dc81231b768e6bbe2b9cb24ff274ce95b37516aab8b8670fa14a10258a8a1605
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 62ff266abbae15b6a6dabe55b27cb8b2850676b0ecfe18e341ae90d6c3f40767
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures explicitly supported library formats and ordered linker configuration.

**Parameter `sharedLibraryExtension`:** The shared-library suffix, or null when shared linkage is unsupported.

**Parameter `importLibraryExtension`:** The separate import-library suffix, or null when the shared library is the link input.

**Parameter `staticLibraryExtension`:** The archive suffix, or null when static linkage is not contributed.

**Parameter `cmakeArguments`:** Ordered platform-owned CMake linker definitions.

**Exception `T:System.ArgumentException`:** No format is supported, an import format lacks shared linkage, a suffix is invalid, or an argument is null.
