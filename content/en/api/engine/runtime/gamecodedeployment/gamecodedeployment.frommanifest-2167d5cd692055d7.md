---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2167d5cd692055d7fee28d9dc8f02bbbebebcc385afd12664a46bb7f4d96fd56
symbol: engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameRuntimeModule})
title: GameCodeDeployment.FromManifest
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: a59f9e8b094446da2a435b5d5be5487d47dbc6414fb27cc088f31aa7d4a46e2d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** Current-format runtime manifest declarations.

## Returns

An immutable logical deployment; invalid declarations fail before activation.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A declaration or its ownership and dependencies are invalid.
