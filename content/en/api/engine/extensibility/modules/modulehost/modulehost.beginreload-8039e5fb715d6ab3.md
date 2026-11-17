---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8039e5fb715d6ab3bce00374c618d69ef14ddda4c1eb76ff737829c10921a0b5
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource})
title: ModuleHost.BeginReload
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: aa362bb8cdca730f49e1dd19ba2d82b8faf272e6cb77eb99445afbd380afe23e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `requests`:** The complete reverse-dependency reload closure.

## Returns

A session that publishes or rolls back every candidate together.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `requests` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when the request set is empty or contains duplicate module names.
