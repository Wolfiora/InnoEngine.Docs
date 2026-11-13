---
uid: api.bd46819df65d943da8626e16344d384e0a38c2323b763db33b3d37dcbaf8891d
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetChange})"
source: xml
reviewed: 29f74b564a55c87b98bb5df79df1c6c223f8f8d5cda3eae78f5787736a450bd4
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.
