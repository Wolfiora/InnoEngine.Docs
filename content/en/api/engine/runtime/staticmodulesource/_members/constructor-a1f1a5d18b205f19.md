---
uid: api.a1f1a5d18b205f195ddab00b8c48a5ceae27ead8088fecc487f079e9822f6067
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticModuleSource.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 2151b971313b73169c3e1911adc652543c9d197b32891185b6d456a7d2dfed43
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Freezes a linked module's explicit assemblies and logical dependencies.

**Parameter `moduleName`:** The stable logical module name.

**Parameter `domain`:** The code ownership domain.

**Parameter `scope`:** The dependency scope of every supplied assembly.

**Parameter `assemblies`:** The linked assemblies; the runtime owns their process lifetime.

**Parameter `dependencies`:** The explicitly declared logical upstream modules.
