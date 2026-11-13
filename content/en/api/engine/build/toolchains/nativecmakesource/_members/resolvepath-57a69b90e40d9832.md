---
uid: api.57a69b90e40d98322a117a98b5f78855b1fddb476cdd0105a9de6123e59c07c5
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolvePath(System.String)"
source: xml
reviewed: 948c617f60093aba7138fc2d8f01b71d6e621cb180244bb20f4a90131911c844
title: "ResolvePath"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves a declared checkout or selected binding input to its copied counterpart.

**Parameter `path`:** An absolute recipe input path. External SDK paths retain their original location.

**Returns:** The copied checkout or binding input, or the unchanged external SDK location.

**Exception `T:System.ArgumentException`:** The path is empty or relative.

**Exception `T:System.InvalidOperationException`:** A checkout or selected binding path was not declared by the recipe.
