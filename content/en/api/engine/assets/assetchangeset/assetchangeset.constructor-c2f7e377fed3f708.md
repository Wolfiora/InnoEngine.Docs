---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c2f7e377fed3f7089dcf1cb180c4474c891a4d63f25c0ea0376980aa5b876cd4
symbol: engine:Inno.Assets:M:Inno.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetChange})
title: AssetChangeSet.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 7c72de863842c9009ba873f9ad8b9f3db0bbf0a41a2ea493ea5c5371de00eb6b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.
