---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.05d94da052f2bffd28577eb00876e3a53683e936ecdbf2bca5dd15156a672a98
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.ResolveReference(System.Guid,System.Guid,System.String,System.Type)
title: AssetLoader.ResolveReference
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 900867a890e3897f1ce7084bf70450281ae7cd6c1b240d5fa1fe143c783714f4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The referenced persistent identity.

**Parameter `stableTypeId`:** The referenced stable asset type identity.

**Parameter `lastKnownPath`:** The last known source-relative path.

**Parameter `expectedType`:** The declared destination type.

## Returns

A compatible canonical asset or missing placeholder.
