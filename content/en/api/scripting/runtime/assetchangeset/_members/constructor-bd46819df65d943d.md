---
uid: api.bd46819df65d943da8626e16344d384e0a38c2323b763db33b3d37dcbaf8891d
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetChangeSet.#ctor(System.Int64,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetChange})"
source: xml
reviewed: 02e571bf65ed415c4b489c2d5901800975f66a54909600e689fc54445f9a4322
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a committed change set.

**Parameter `revision`:** The monotonic database revision assigned to the atomic commit.

**Parameter `changes`:** The ordered changes published by the commit, or `null` for an empty commit.
