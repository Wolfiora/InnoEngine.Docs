---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.04f61defaf7ae4ab84f3d40c985c7f2dd64e7e025cbe91c04a041cf48fee3fad
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.#ctor(Inno.Runtime.GameCodeDeployment,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}})
title: StaticPlayerModuleActivator.Constructor
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: 459a0b4e4ddd397d20fcbe4373316242707d43af9f0cb0fafbc24b8bee517307

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `deployment`:** The build-generated code identity closure.

**Parameter `assemblies`:** Explicit linked assembly instances grouped by logical module; values are copied.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A linked assembly is absent, duplicated, or owned by an undeclared module.
