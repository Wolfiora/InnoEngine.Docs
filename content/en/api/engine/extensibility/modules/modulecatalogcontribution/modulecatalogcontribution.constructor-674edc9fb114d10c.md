---
uid: api.674edc9fb114d10cb62023196bf87a097e3084c7231c4b985e1d87cbc256e006
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleCatalogContribution.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyDictionary{System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyScope},Inno.Extensibility.Modules.IModuleLifetime)"
source: xml
reviewed: 595c2342f132d72d36bf9fee2032a172abcd534b4652647907e838c973bd4dd5
title: "ModuleCatalogContribution.Constructor"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Acquires immutable views while transferring the generation lifetime to the contribution.

## Parameters

**Parameter `moduleName`:** The stable module name.

**Parameter `domain`:** The ownership domain.

**Parameter `scope`:** The module's default dependency scope.

**Parameter `assemblies`:** The complete acquired assembly set.

**Parameter `assemblyScopes`:** The actual dependency scope of every acquired assembly.

**Parameter `lifetime`:** The transferred generation owner; null denotes externally owned static code.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty, the assembly set is empty or contains duplicates, or scope metadata is incomplete.
