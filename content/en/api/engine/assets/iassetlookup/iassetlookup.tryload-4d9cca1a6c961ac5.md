---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4d9cca1a6c961ac570263955d5c8107fd0556abd289accd18fcb98f5ced18a6a
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad``1(System.Guid,``0@)
title: IAssetLookup.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 98181e9c39aebfc2fce5f02b6c9294c958cab7c475b212447f6db7f6891c31fc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentID`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the lookup contains a compatible asset; otherwise, `false`.
