---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.04f61defaf7ae4ab84f3d40c985c7f2dd64e7e025cbe91c04a041cf48fee3fad
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.#ctor(Inno.Runtime.GameCodeDeployment,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}})
title: StaticPlayerModuleActivator.Constructor
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: a43ac4b595bb4229f60d2ad06e4ca2b153d760e671f814a945c9d27f8a419112
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deployment`:** The build-generated code identity closure.

**Parameter `assemblies`:** Explicit linked assembly instances grouped by logical module; values are copied.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A linked assembly is absent, duplicated, or owned by an undeclared module.
