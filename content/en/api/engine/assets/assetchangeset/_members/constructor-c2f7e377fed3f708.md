---
uid: api.c2f7e377fed3f7089dcf1cb180c4474c891a4d63f25c0ea0376980aa5b876cd4
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetChange})"
source: xml
reviewed: b72a08c4fbd6579fb8786ed6e63414e115616c61f4280c8de072581e5ab7a87d
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.
