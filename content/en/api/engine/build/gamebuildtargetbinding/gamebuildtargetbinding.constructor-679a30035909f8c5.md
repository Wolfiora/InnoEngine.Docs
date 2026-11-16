---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.679a30035909f8c5ed5eaf0ed4ed7e3768204b7749a547948d9952263b3c59a3
symbol: engine:Inno.Build:M:Inno.Build.GameBuildTargetBinding.#ctor(Inno.Build.IGameBuildTarget,Inno.Build.IGameContentCompiler)
title: GameBuildTargetBinding.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 0dde10f965c40b243af7f337d2373e6ae19ef510796fffee7073c903a1698bf1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `packager`:** The borrowed platform packaging implementation.

**Parameter `compiler`:** The borrowed content implementation for the same target and authoring generation.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Either implementation is null.

**Exception `T:System.ArgumentException`:** A target is unassigned or the two implementation identities disagree.
