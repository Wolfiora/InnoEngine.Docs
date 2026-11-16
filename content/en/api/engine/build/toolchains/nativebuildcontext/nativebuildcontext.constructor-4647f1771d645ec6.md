---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4647f1771d645ec6e8b738ffc03c19ed09c7a8096b84f998333cd23f7cae5382
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.#ctor(System.String,System.String)
title: NativeBuildContext.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: df031f0bf7a868d31202a8904aab3f252d4afb171aba670a81e934d16963f510
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout containing InnoEngine.sln and the native source tree; aliases resolve to one physical owner.

**Parameter `configuration`:** The normalized debug or release configuration.

## Exceptions

**Exception `T:System.ArgumentException`:** The root is empty or the configuration is unsupported.

**Exception `T:System.IO.DirectoryNotFoundException`:** The selected checkout has no repository marker.

**Exception `T:System.IO.IOException`:** A checkout alias cannot be resolved to a physical owner.
