---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7c69f6d98f696f8244ed081973b532f3aee248da35969e02828da10825839172
symbol: engine:Inno.Build:M:Inno.Build.BuildProfileStore.#ctor(System.String,Inno.Core.Serialization.SerializationRegistry)
title: BuildProfileStore.Constructor
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: d9a352343ce7e5f4c361fcd2af7521405b8fe76821b2168f521ecf3a5b9f352f
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
