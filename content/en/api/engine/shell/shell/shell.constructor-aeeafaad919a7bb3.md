---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aeeafaad919a7bb3699621a733bb8c921b4dbfaaeb057447a0fc12a4b1aca879
symbol: engine:Inno.Shell:M:Inno.Shell.Shell.#ctor(Inno.Adapter.IAdapterCatalog,Inno.Shell.ShellOptions)
title: Shell.Constructor
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: 02b1554860ed224f7343fe3196011297ff8f645fd417c3a5a7ee5e9016f6c640
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `adapterCatalog`:** Catalog that resolves explicit backend selections without leaking implementation types.

**Parameter `options`:** Primary-window and rendering policy.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `adapterCatalog` or `options` is null.
