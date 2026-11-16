---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1f1a5d18b205f195ddab00b8c48a5ceae27ead8088fecc487f079e9822f6067
symbol: engine:Inno.Runtime:M:Inno.Runtime.StaticModuleSource.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyList{System.String})
title: StaticModuleSource.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 6ebf2a2f7161fe0efb30e27f7df1dcf8cc9f05c38687d50d958595b7bc3dee77
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `moduleName`:** The stable logical module name.

**Parameter `domain`:** The code ownership domain.

**Parameter `scope`:** The dependency scope of every supplied assembly.

**Parameter `assemblies`:** The linked assemblies; the runtime owns their process lifetime.

**Parameter `dependencies`:** The explicitly declared logical upstream modules.
