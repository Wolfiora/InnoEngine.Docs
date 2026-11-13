---
uid: api.c2f7e377fed3f7089dcf1cb180c4474c891a4d63f25c0ea0376980aa5b876cd4
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetChange})"
source: xml
reviewed: f9be6824a1559affdc78f7049894335aad96745f89bb8f43d5891dd3b3944733
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.
