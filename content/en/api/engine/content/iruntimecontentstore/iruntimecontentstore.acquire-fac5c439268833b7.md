---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fac5c439268833b7cefd8b54e8267a0222e6276b417c83b3047b057659c47867
symbol: engine:Inno.Content:M:Inno.Content.IRuntimeContentStore.Acquire(Inno.Content.ContentKey)
title: IRuntimeContentStore.Acquire
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 1c412fdfa28dc19e53741fe9f4c8839237e3a82510886fb0492383bddd577d22
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The exact assigned logical key.

## Returns

A caller-owned lease whose streams remain usable after this store closes.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The exact content key is not present.

**Exception `T:System.ObjectDisposedException`:** The store has closed and cannot issue new leases.
