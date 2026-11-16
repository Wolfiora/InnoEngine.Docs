---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0eb8bbf7f02a3ff1b1a269bf7d851eb79c0349e804ab35482b6143a77ae63d28
symbol: engine:Inno.Runtime:M:Inno.Runtime.GameCodeModule.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeAssembly},System.Collections.Generic.IReadOnlyList{System.String})
title: GameCodeModule.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 7e050e6cd26d135dcbacf071b0254e23aabce28cf5fd8b7dcb9080989ab393db
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** The stable module identity.

**Parameter `domain`:** The ownership domain of this game's code.

**Parameter `assemblies`:** The exact ordered code identities to activate.

**Parameter `dependencies`:** The logical modules that precede this contribution.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The module identity, domain, code or dependencies are invalid.
