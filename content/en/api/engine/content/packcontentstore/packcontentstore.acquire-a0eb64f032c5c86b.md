---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a0eb64f032c5c86ba3e64aa7652217ac3381747761867d4375637ce37397d8f1
symbol: engine:Inno.Content:M:Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey)
title: PackContentStore.Acquire
kind: api
owners:
- Inno.Content
apiSurface: source-clr
sourceFingerprint: b842108f18f023e1ac0405d08f83bfc252b6a58eb2ac177ecf714fad20c3b4e6
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
