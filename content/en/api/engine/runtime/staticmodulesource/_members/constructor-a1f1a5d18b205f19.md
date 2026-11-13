---
uid: api.a1f1a5d18b205f195ddab00b8c48a5ceae27ead8088fecc487f079e9822f6067
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticModuleSource.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 6d6672f666b77874e73b3d41970fa7cfc63f9b6e3c9b703eb642aea23e95132d
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
