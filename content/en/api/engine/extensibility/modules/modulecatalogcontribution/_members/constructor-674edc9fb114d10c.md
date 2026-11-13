---
uid: api.674edc9fb114d10cb62023196bf87a097e3084c7231c4b985e1d87cbc256e006
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleCatalogContribution.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyDictionary{System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyScope},Inno.Extensibility.Modules.IModuleLifetime)"
source: xml
reviewed: 47d66e2179141e37faea5127f01b33d3d556dee1529bf585f18d5019604808f9
title: "Constructor"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Acquires immutable views while transferring the generation lifetime to the contribution.

**Parameter `moduleName`:** The stable module name.

**Parameter `domain`:** The ownership domain.

**Parameter `scope`:** The module's default dependency scope.

**Parameter `assemblies`:** The complete acquired assembly set.

**Parameter `assemblyScopes`:** The actual dependency scope of every acquired assembly.

**Parameter `lifetime`:** The transferred generation owner; null denotes externally owned static code.

**Exception `T:System.ArgumentException`:** The name is empty, the assembly set is empty or contains duplicates, or scope metadata is incomplete.
