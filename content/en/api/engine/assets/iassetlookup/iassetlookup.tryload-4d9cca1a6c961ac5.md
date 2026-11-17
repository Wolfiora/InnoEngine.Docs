---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4d9cca1a6c961ac570263955d5c8107fd0556abd289accd18fcb98f5ced18a6a
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad``1(System.Guid,``0@)
title: IAssetLookup.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 9c1c603c8d9253e21926cb87c1bed8d3051808c7ff21775719d9f07d4730b86d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the lookup contains a compatible asset; otherwise, `false`.
