---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7c69f6d98f696f8244ed081973b532f3aee248da35969e02828da10825839172
symbol: engine:Inno.Build:M:Inno.Build.BuildProfileStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry)
title: BuildProfileStore.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 256179c75351aa8aca8770b18db930a4d607e6db758f301b5d28035926262900
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The project-owned path of the build profile document.

**Parameter `serialization`:** The serialization registry whose active generation owns the generated converter.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `serialization` is `null`.
