---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.34e6eefd494ad49e4b8a431eba230ac1e9906e99aa25372385ea5a7c54e1da1b
symbol: engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Storage.IApplicationStorage})
title: StorageRuntimeFactory.Constructor
kind: api
owners:
- Inno.Storage.Runtime
apiSurface: source-clr
reviewed: 436bfd721d1931909e9ec8904b6cd7edad9120eb22ee1db1eb87fea4f0c5db47

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a reusable factory that obtains an exclusively owned storage sandbox for each session.

## Parameters

**Parameter `storageFactory`:** The composition callback that creates a distinct storage service for the supplied session context.
