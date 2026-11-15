---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0eb64f032c5c86ba3e64aa7652217ac3381747761867d4375637ce37397d8f1
symbol: engine:Inno.Content:M:Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey)
title: PackContentStore.Acquire
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 5079dae92b4b2f97d461ed32c9ab3d19d0543ef352cc6ca889797a26212e00f0

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `key`:** The exact assigned logical key.

## Returns

A caller-owned lease whose streams remain usable after this store closes.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The exact content key is not present.

**Exception `T:System.ObjectDisposedException`:** The store has closed and cannot issue new leases.
