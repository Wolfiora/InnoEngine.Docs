---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dca15f864e800d33e71c03269bc6eb60d41292c4d3b32c0809326d0bda13e19c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePolicy.#ctor(System.Int64,System.Int64,System.Nullable{System.TimeSpan})
title: BuildCachePolicy.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 9412c0a7a2ccc4760e2a49f7e3e6cdc7b1d511a747a7235fe19c18b51ab27e90
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `maximumBytes`:** The managed cache budget; defaults to 64 GiB.

**Parameter `minimumFreeBytes`:** The free-space threshold on the checkout volume; defaults to 20 GiB.

**Parameter `timeBudget`:** The retirement duration, or null for the five-second default.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** A budget is negative or the time limit is not positive.
