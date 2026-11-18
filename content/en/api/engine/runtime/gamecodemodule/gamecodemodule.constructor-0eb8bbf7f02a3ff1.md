---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0eb8bbf7f02a3ff1b1a269bf7d851eb79c0349e804ab35482b6143a77ae63d28
symbol: engine:Inno.Runtime:M:Inno.Runtime.GameCodeModule.#ctor(System.String,Inno.Extensibility.Modules.AssemblyDomain,System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeAssembly},System.Collections.Generic.IReadOnlyList{System.String})
title: GameCodeModule.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 61cf9d9574a51669e8ecd828c6e42b5d1f635059e6cdea4a26a553edbaaffaf8
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
